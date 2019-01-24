const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');

let commentSchema = new Schema({
  content: String,
  likes: { type: Number, default: 0 },
  author: [userSchema],
  datePosted: Date
});

mongoose.model('Comment', commentSchema);