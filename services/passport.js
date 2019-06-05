const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const GoogleStrategy = require('passport-google-oauth20');
const GitHubStrategy = require('passport-github');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('User');

// Do some voodoo
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, id);
    });
});

const localLogin = new LocalStrategy(function(username, password, done){
  User.findOne({ local: { username: username } },  function(err, user){
    console.log(user);
    
    if(err) { return done(err) }
  
    user.comparePassword(password, (err, isMatch) => {
      if(err) { return done(err); }
      if(!isMatch){ return done(null, false); }

      return done(null, user);
    }); 
  });
});

const jwtOptions = { 
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.jwtSecret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {

  User.findById(payload.sub, function(err, user){
    if(err){ return done(err, false); }

    if(user){
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(localLogin);
passport.use(jwtLogin);

passport.use(
  new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback',
    enableProof: true,
    proxy: true,
  },
  async (accessToken, refreshToken, profile, done) => {


    const existingUser = await User.findOne({ "facebook.id": profile.id });

    if(existingUser){
      return done(null, existingUser);
    }


    const user = await new User({ facebook: { id: profile.id, username: profile.displayName} })
      .save();
    done(null, user);
  })
);

passport.use(
  new TwitterStrategy({
    consumerKey: keys.twitterConsumerKey,
    consumerSecret: keys.twitterConsumerSecret,
    callbackURL: '/auth/twitter/callback',
    proxy: true
  }, 
  async (token, tokenSecret, profile, done) => {
    const existingUser = await User.findOne({ "twitter.id": profile.id });
    
    if(existingUser){
      return done(null, existingUser);
    }

    const user = await new User({ twitter: { id: profile.id, username: profile.displayName } }).save();
    done(null, user);
  })
);

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {

    const existingUser = await User.findOne({ "google.id": profile.id });

    if(existingUser){
      return done(null, existingUser);
    }

    const user = await new User({ google: { id: profile.id, username: profile.displayName } }).save();

    done(null, user);
  })
);

passport.use(
  new GitHubStrategy({
    clientID: keys.githubClientID,
    clientSecret: keys.githubClientSecret,
    callbackURL: '/auth/github/callback',
    proxy: true
  }, 
  async (accessToken, refreshToken, profile, done) => {
    
    const existingUser = await User.findOne({ "github.id": profile.id });

    if(existingUser){
      return done(null, existingUser);
    }

    const user = await new User({ github: { id: profile.id, username: profile.displayName } }).save();

    done(null, user);
  })
);
