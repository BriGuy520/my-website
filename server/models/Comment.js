const mongoose = require('mongoose');
const { Schema } = mongoose;

let commentSchema = new Schema({
  commentBody: String,
  likes: Number,
  datePosted: Date
});

module.exports = commentSchema;