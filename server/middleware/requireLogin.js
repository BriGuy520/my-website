const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = async (req, res, next) => {
  if(!req.user){
  
    return res.send('please sign in');
  }

 next();
}