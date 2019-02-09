const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Comment = mongoose.model('Comment');
const Blog = mongoose.model('Blog');

module.exports = (app) => {

  app.post('/api/comment/:id/like', async (req, res) => {

    console.log(req.params.id);
    const comment = await Comment.findOneAndUpdate({_id: req.params.id}, {
      $inc:{ 'likes': 1 }
    }).exec();
      
    console.log(comment);
    res.send(comment);
  });

  app.post('/api/blog/:id/like', requireLogin, async (req, res) => {

    const blog = await Blog.findOneAndUpdate({_id: req.params.id}, {
      $inc:{ 'likes': 1 }
    }).exec();
    
    console.log(blog);
    res.send(blog);
  });
};