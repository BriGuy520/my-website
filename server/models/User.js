const mongoose = require('mongoose');
const { Schema } = mongoose;

let userSchema = new Schema({
  userId: String,
  username: String
});

mongoose.model('users', userSchema);