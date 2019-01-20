const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');


const blogSchema = new Schema({
  title: String,
  image: String,
  body: String,
  author: [userSchema] ,
  datePosted: { type: Date, default: Date.now },
  likes: { type: Schema.Types.ObjectId, ref: "Like"},
  comments: { type: Schema.Types.ObjectId, ref: "Comment" }
});

mongoose.model('Blog', blogSchema);