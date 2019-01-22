const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = require('./User');


const blogSchema = new Schema({
  title: String,
  image: String,
  body: String,
  author: [userSchema] ,
  datePosted: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

mongoose.model('Blog', blogSchema);