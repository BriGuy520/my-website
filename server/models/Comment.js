const mongoose = require('mongoose');
const { Schema } = mongoose;

let commentSchema = new Schema({
  content: String,
  likes: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "Like"
    }
  },
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  datePosted: Date
});

mongoose.model('comments', commentSchema);