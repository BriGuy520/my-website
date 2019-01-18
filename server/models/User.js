const mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema({
  twitterId: String,
  facebookId: String,
  googleId: String,
  githubId: String,
  username: String
});

mongoose.model('User', userSchema);