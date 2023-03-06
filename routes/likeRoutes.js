const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Comment = mongoose.model('Comment');
const Blog = mongoose.model('Blog');
const User = mongoose.model('User');

module.exports = (app) => {

  app.post('/api/comment/:id/like', requireLogin, async (req, res) => {

    console.log("LIKE CALLED");
    console.log(req.user);
    await User.findOneAndUpdate({ _id: req.user }, {
      $push: { commentLikes: [req.params.id] }
    });

    const comment = await Comment.findOneAndUpdate({_id: req.params.id}, {
      $inc:{ 'likes': 1 },
      $push:{ userLikes: [req.user] }
    }).exec();
      
    res.send(comment);
  });

  app.post('/api/blog/:id/like', requireLogin, async (req, res) => {
    
    await User.findOneAndUpdate({ _id: req.user }, {
      $push: { blogLikes: [req.params.id] }
    });
      
    

    const blog = await Blog.findOneAndUpdate({_id: req.params.id}, {
      $inc:{ 'likes': 1 },
      $push:{ userLikes: [req.user] }
    }).exec();
    
    res.send(blog);
  });
};