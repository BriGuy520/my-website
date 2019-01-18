const mongoose = require('mongoose');
const { Schema } = mongoose;

const strategy = {
  id: String,
  username: String
}

let userSchema = new Schema({
  twitter: strategy,
  facebook: strategy,
  google: strategy,
  github: strategy,
  local: {
    username: String, 
    email: String,
    password: String
  }
});

mongoose.model('User', userSchema);