const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = async (req, res, next) => {
  console.log(!req.user);
  console.log(requireAuth);
  if(!req.user){
    console.log('hit the require login module')
    return res.send('please sign in');
  }

 // next();
}