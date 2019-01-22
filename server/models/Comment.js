const mongoose = require('mongoose');
const likeSchema = require('./Like');
const { Schema } = mongoose;

let commentSchema = new Schema({
  content: String,
  likes: { type: Number, default: 0 },
  author: {
    id: { type: Schema.Types.ObjectId, ref: "User" },
    username: String
  },
  datePosted: Date
});

mongoose.model('Comment', commentSchema);