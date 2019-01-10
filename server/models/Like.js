const mongoose = require('mongoose');
const { Schema } = mongoose;

let likeSchema = new Schema({
  likes: { type: Number, default: 0 }
});

mongoose.model('likes', likeSchema);