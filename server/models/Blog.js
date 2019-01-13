const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./Comment');
const likeSchema = require('./Like');

const blogSchema = new Schema({
  title: String,
  image: String,
  body: String,
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  datePosted: { type: Date, default: Date.now },
  likes: likeSchema,
  comments: [commentSchema]
});

mongoose.model('Blog', blogSchema);