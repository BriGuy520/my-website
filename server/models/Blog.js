const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./Comment');
const 

const blogSchema = new Schema({
  title: String,
  image: String,
  body: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  datePosted: { type: Date, default: Date.now },
  likes: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like"
    }
  },
  comments: [commentSchema]
});

mongoose.model('blogs', blogSchema);