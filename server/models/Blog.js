const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./Comment');

const blogSchema = new Schema({
  title: String,
  body: String,
  author: String,
  topic: String,
  datePosted: Date,
  comments: [commentSchema]
});

mongoose.model('blogPosts', blogSchema);