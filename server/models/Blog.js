const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./Comment');

const blogSchema = new Schema({
  blogId: String,
  title: String,
  body: String,
  author: String,
  tags: String,
  datePosted: Date,
  likes: Number,
  comments: [commentSchema]
});

mongoose.model('blogPosts', blogSchema);