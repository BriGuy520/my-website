const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Blog = mongoose.model('Blog');

module.exports = (app) => {

  // Show all blogs
  app.get('/api/blog', async (req, res) => {
    const blogs = await Blog.find({ user: req.user.id });

    console.log(blogs);
    res.send(blogs);
  });

  app.post('/api/blog', requireLogin, async (req, res) => {
    const { title, body, image, likes, comments } = req.body;

    const blog = new Blog({
      title,
      image,
      body,
      author: req.body.author.id,
      likes,
      datePosted: Date.now(),
      comments
    });
    
    blog.save();


    res.send(blog);
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