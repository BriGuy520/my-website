const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const GoogleStrategy = require('passport-google-oauth20');
const GitHubStrategy = require('passport-github');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, id);
    });
});

passport.use(
  new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback',
    enableProof: true,
    proxy: true,
  },
  async (accessToken, refreshToken, profile, done) => {


    const existingUser = await User.findOne({ facebookId: profile.id });

    if(existingUser){
      return done(null, existingUser);
    }

    const user = await new User({ facebookId: profile.id }).save();
    done(null, user);
  })
);

passport.use(
  new TwitterStrategy({
    consumerKey: keys.twitterConsumerKey,
    consumerSecret: keys.twitterConsumerSecret,
    callbackURL: '/auth/twitter/callback'
  }, 
  async (token, tokenSecret, profile, done) => {
    const existingUser = await User.findOne({ twitterId: profile.id });

    if(existingUser){
      return done(null, existingUser);
    }

    const user = await new User({ twitterId: profile.id }).save();
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

    const existingUser = await User.findOne({ googleId: profile.id });

    if(existingUser){
      return done(null, existingUser);
    }

    const user = await new User({ googleId: profile.id }).save();

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
    
    const existingUser = await User.findOne({ githubId: profile.id });

    if(existingUser){
      return done(null, existingUser);
    }

    const user = await new User({ githubId: profile.id }).save();

    done(null, user);
  })
);
