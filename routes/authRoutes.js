const passport = require('passport');
const mongoose = require('mongoose');
const Authentication = require('../controllers/authentication');

const requireLogin = require('../middleware/requireLogin');

const requireSignIn = passport.authenticate('local', { session: false });

const User = mongoose.model('User');

module.exports = (app) => {

  // app.get('/login', function(req, res){
  //   res.redirect('localhost:5000/login');
  // });

  app.post('/api/signin', requireSignIn, Authentication.signin);
  app.post('/api/signup', Authentication.signup);

  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', 
    passport.authenticate('google'), (req, res) => {
      res.redirect('/blog');
    });

  app.get('/auth/twitter', passport.authenticate('twitter'), (req, res) => {
    res.redirect('/blog');
  });

  app.get('/auth/twitter/callback', 
    passport.authenticate('twitter'), (req, res) => {
      res.redirect('/blog');
    });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', 
    passport.authenticate('facebook'), (req, res) => {
      res.redirect('/blog');
    });

  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
    res.redirect('/blog');
  });

  app.get('/api/logout', (req, res) => {

    console.log("logging out");

    req.logout();
    res.redirect('/');
  });


  app.get('/api/current_user', requireLogin, async(req, res) => {

    User.findOne({ _id: req.user})
    .then(data => {

      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
  });
  
}
