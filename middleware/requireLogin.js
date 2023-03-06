const passport = require('passport');
const jwt = require('jwt-simple');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (req, res, next) => {

  console.log("CALLED");
  console.log(req.headers.authorization); 

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token, keys.jwtSecret);
    const userId = decoded.sub;


    User.findById(userId, (err, user) => {
      if (err || !user) {
        return res.status(401).send({ error: 'Unauthorized' });
      }

      req.user = userId;

      console.log(req.user);

      requireAuth;

      next();

    });

  } else {

    if(!req.user || !requireAuth){
      return res.send('please sign in');
    }
  
    next();
  }
}