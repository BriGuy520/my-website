const passport = require('passport');
const Authentication = require('../controllers/authentication');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {

  app.get('/', requireAuth, function(req, res){
    res.send({ hi: 'everybody' });
  });

  app.post('/api/signin', requireSignIn, Authentication.signin);
  app.post('/api/signup', Authentication.signup);

  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', 
    passport.authenticate('google'), (req, res) => {
      res.redirect('/blog')
    });

  app.get('/auth/twitter', passport.authenticate('twitter'), (req, res) => {
    res.redirect('/blog')
  });

  app.get('/auth/twitter/callback', 
    passport.authenticate('twitter'), (req, res) => {
      res.redirect('/blog')
    });

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback', 
    passport.authenticate('facebook'), (req, res) => {
      res.redirect('/blog')
    });

  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', passport.authenticate('github'), (req, res) => {
    res.redirect('/blog')
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


  app.get('/api/current_user', (req, res) => {
    
    res.send(req.user);
  });
  
}
