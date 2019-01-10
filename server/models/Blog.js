const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./Comment');

const blogSchema = new Schema({
  title: String,
  image: String,
  body: String,
  _author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  datePosted: { type: Date, default: Date.now },
  likes: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "likes"
    }
  },
  comments: [commentSchema]
});

mongoose.model('blogs', blogSchema);