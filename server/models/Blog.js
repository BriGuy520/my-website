const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./Comment');

const blogSchema = new Schema({
  title: String,
  image: String,
  body: String,
  datePosted: { type: Date, default: Date.now },
  likes: Number,
  comments: [commentSchema]
});

mongoose.model('blogs', blogSchema);