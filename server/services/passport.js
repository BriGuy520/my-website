const passport = require('passport');
const FacebookStrategy = require('passort-facebook');
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
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
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
    clientID: TWITTER_APP_ID,
    clientSecret: TWITTER_APP_SECRET,
    callbackURL: '/auth/twitter/callback',
    proxy: true
  },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({ twitterId: profile.id }, (err, user) => {
        return cb(err, user)
      });
    }
  )
)

passport.use(
  new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_APP_SECRET,
    callbackURL: '/auth/google/callback',
    proxy
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