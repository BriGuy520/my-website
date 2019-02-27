const mongoose = require('mongoose');
const { Schema } = mongoose;

const strategy = {
  id: String,
  username: String
}

let userSchema = new Schema({
  admin: Boolean,
  twitter: strategy,
  facebook: strategy,
  google: strategy,
  github: strategy,
  local: {
    username: String, 
    email: String,
    password: String
  }, 
  blogLikes: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  commentLikes: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

mongoose.model('User', userSchema);