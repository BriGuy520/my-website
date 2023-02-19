const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');


const blogSchema = new Schema({
  post: String,
  image: String,
  author: [userSchema],
  datePosted: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  userLikes: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

mongoose.model('Blog', blogSchema);