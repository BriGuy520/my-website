const passport = require('passport');


module.exports = async (req, res, next) => {

  await passport.authenticate('jwt', { session: false }, (err, user, info) => {

    console.log(user);

    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('please sign in');
    }
    req.user = user;
    next();
  });
}