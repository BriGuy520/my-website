const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');

let commentSchema = new Schema({
  content: String,
  likes: { type: Number, default: 0 },
  userLikes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: [userSchema],
  datePosted: { type: Date, default: Date.now },
  blog: { type: Schema.Types.ObjectId, ref: "Blog" }
});

mongoose.model('Comment', commentSchema);