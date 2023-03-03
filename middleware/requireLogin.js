const passport = require('passport');
const jwt = require('jwt-simple');
const keys = require('../config/keys');


module.exports = (req, res, next) => {

  console.log(req.headers.authenticate);

  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  
  const token = req.headers.authorization.split(' ')[1];
  
  const decoded = jwt.decode(token, keys.jwtSecret);

    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err || !user) {
        console.log(err);
        console.log(user);
        return res.status(401).send({ error: 'Unauthorized' });
      }
      req.user = user;
      next();
    })(req, res, next);
}