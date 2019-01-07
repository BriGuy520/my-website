const mongoose = require('mongoose');
const { Schema } = mongoose;

let commentSchema = new Schema({
  text: String,
  likes: Number,
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