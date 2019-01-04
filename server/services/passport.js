const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

passport.use(
  new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback",
    proxy: true
  },
    (accessToken, refreshToken, profile, cb) => {

      const existingUser = User.findOne({ facebookId: profile.id });

      if(existingUser){
        return cb(null, existingUser);
      }

      const user = new User({ facebookId: profile.id }).save();
      cb(null, user);
    }
  )
);

passport.use(
  new TwitterStrategy({
    consumerKey: keys.twitterClientID,
    consumerSecret: keys.twitterClientSecret,
    callbackURL: '/auth/twitter/callback',
    proxy: true
  },
    (accessToken, refreshToken, profile, cb) => {
      const existingUser = User.findOne({ twitterId: profile.id });

      if(existingUser){
        return cb(null, existingUser);
      }

      const user = new User({ twitterId: profile.id }).save();
      cb(null, user);
    }
  )
);

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
    (accessToken, refreshToken, profile, cb) => {

      const existingUser = User.findOne({ googleId: profile.id });
        if(existingUser){
          return cb(null, user);
        }

      const user = new User({ googleId: profile.id }).save();
      cb(null, user);
    }
  )
);