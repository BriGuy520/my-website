const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Comment = mongoose.model('Comment');
const Blog = mongoose.model('Blog');

module.exports = (app) => {

  app.post('/api/comment/:id/like', requireLogin, async (req, res) => {

    console.log(req.params.id);
    const comment = await Comment.findOneAndUpdate({_id: req.params.id}, {
      $inc:{ 'likes': 1 }
    }).exec();
      
    res.send(comment);
  });

  app.post('/api/blog/:id/like', requireLogin, async (req, res) => {

    const blog = await Blog.findOneAndUpdate({_id: req.params.id}, {
      $inc:{ 'likes': 1 }
    }).exec();
    
    res.send(blog);
  });
};