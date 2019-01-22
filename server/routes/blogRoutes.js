const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Blog = mongoose.model('Blog');
const User = mongoose.model('User');

module.exports = (app) => {

  // Show all blogs
  app.get('/api/blog', async (req, res) => {
    const blogs = await Blog.find({ user: req.user.id });

    res.send(blogs);
  });

  app.post('/api/blog', requireLogin, (req, res) => {
    const { title, body, image, likes, comments } = req.body;
   
     User.findOne({ _id: req.user})
      .then(data => {
        const username = data.google.username || data.twitter.username || data.facebook.username || data.github.username;

        const blog = new Blog({
          title,
          image,
          body,
          author: username,
          likes,
          datePosted: Date.now(),
          comments
        });
    
        blog.save();
        res.send(blog);
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get('/api/blog/:id', (req, res) => {
    Blog.findById(req.params.id)
      .populate("comments")
      .exec()
      .then(data => {
        res.status(200).json(data);
      }).catch(err => {
        res.status(400).json({ error: err });
      });
  });
}