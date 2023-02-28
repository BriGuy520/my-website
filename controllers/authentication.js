const jwt = require('jwt-simple');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.jwtSecret);
}

exports.signin = function(req, res, next){
  console.log(req.user);
  res.send({ token: tokenForUser(req.user) });
  res.redirect('/blog');
}

exports.signup = function(req, res, next){

  const { username, password } = req.body;

  console.log(password);

  console.log("working");
  if(!username || !password){
    return res.status(422).send({ error: 'You need a username and password to continue'});
  }

  User.findOne({ "local.username": username }, function(err, existingUser){
    if(err) { return next(err); }

    if(existingUser){
      return res.status(422).send({ error: 'Username is in use' });
    }

    const user = new User({
      local: { username: username, password: password } 
    });

    user.save(function(err){
      if(err){ return next(err); }
    });
  
    res.json({ token: tokenForUser(user) });
  });
}