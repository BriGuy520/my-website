const mongoose = require('mongoose');
const { Schema } = mongoose;

let commentSchema = new Schema({
  commentId: String,
  commentBody: String,
  datePosted: Date
});

module.exports = commentSchema;