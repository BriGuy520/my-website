const mongoose = require('mongoose');
const { Schema } = mongoose;

let commentSchema = new Schema({
  content: String,
  likes: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like"
    }
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  datePosted: Date
});

module.exports = commentSchema;