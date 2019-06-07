const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (req, res, next) => {
  console.log(req.user);
  console.log(requireAuth);
  if(!req.user){
    console.log('hit the require login module')
    return res.redirect('/');
  }

  next();
}