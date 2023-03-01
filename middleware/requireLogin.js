const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = async (req, res, next) => {
  
  console.log(req.user);

  if(!req.user || !requireAuth){
    return res.send('please sign in');
  }

 next();
}