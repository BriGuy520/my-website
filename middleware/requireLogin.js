const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (req, res, next) => {
  if(!req.user || !requireAuth){
    return res.redirect('/login');
  }

  next();
}