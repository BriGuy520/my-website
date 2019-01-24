const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Comment = mongoose.model('Comment');
const User = mongoose.model('User');
const Blog = mongoose.model('Blog');

module.exports = (app) => {

  app.get('/api/blog/:id/comment', async (req, res) => {
    // fetch comments from a blog
   const comments = await Comment.find({ user: req.user.id });

   res.send(comments);
  });

  app.post('/api/blog/:id/comment', async (req, res) => {

    const { content, likes } = req.body;
    const blogId = await Blog.findById(req.params.id);
  
    await User.findOne({ _id: req.user })
      .then(data => {
        console.log(data.github.username);

        username = data.google.username || data.twitter.username || data.facebook.username || data.github.username;

        const comment = new Comment({ 
          content,
          author: username,
          likes, 
          datePosted: Date.now(),
          blog: blogId
          
        });

        comment.save();
        console.log(comment);
        res.send(comment);
      })
      .catch(err => {
        console.log(err);
      });
  });
}