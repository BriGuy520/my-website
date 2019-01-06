const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./Comment');

const blogSchema = new Schema({
  title: String,
  body: String,
  author: String,
  tags: String,
  datePosted: Date,
  likes: Number,
  comments: [commentSchema]
});

mongoose.model('blogs', blogSchema);