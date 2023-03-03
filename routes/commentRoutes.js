const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Comment = mongoose.model('Comment');
const User = mongoose.model('User');
const Blog = mongoose.model('Blog');

module.exports = (app) => {


  app.post('/api/blog/:id/comment', requireLogin, async (req, res) => {
    

    const { content, likes } = req.body;
    const blogId = await Blog.findById(req.params.id);

    console.log(req);
  
  
    await User.findOne({ _id: req.user })
      .then(data => {

        const username = data.google.username || data.twitter.username || data.facebook.username || data.github.username || data.local.username;

        const comment = new Comment({ 
          content,
          author: username,
          likes, 
          datePosted: Date.now(),
          blog: blogId
          
        });

        comment.save();
        res.send(comment);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get('/api/blog/:id/comment', async (req, res, next) => {
    // fetch comments from a blog
   const comments = await Comment.find({ id: req.params._id });
  
   res.send(comments);
   next();
  });
}