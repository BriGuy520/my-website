const passport = require('passport');

module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/blog');
    });

  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback', 
    passport.authenticate('twitter'), 
    (req, res) => {
      res.redirect('/blog');
  });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', 
    passport.authenticate('facebook'), 
    (req, res) => {
      res.redirect('/blog');
  })
}
