const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

function tokenForUser(user){
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.jwtSecret);
}

exports.signin = function(req, res, next){
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next){

  const { username, password, firstName, lastName } = req.body;

  if(!username || !password){
    return res.status(422).send({ error: 'You need a username and password to continue'});
  }

  User.findOne({ "local.username": username }, function(err, existingUser){
    if(err) { return next(err); }

    if(existingUser){
      return res.status(422).send({ error: 'Username is in use' });
    }

    const user = new User({
      local: { username: username, password: password, firstName: firstName, lastName: lastName } 
    });

    user.save(function(err){
      if(err){ return next(err); }
    });
  
    res.json({ token: tokenForUser(user) });
  });
}