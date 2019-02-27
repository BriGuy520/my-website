const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
    password: String
  }, 
  blogLikes: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  commentLikes: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

userSchema.pre('save', function save(next){
  const user = this;
  if(!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if(err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
}

mongoose.model('User', userSchema);