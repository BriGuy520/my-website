const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Blog = mongoose.model('blogs');

module.exports = (app) => {

  app.get('/api/blogs', async (req, res) => {
    const blogs = await Blog.find({ _user: req.user.id });

    res.send(blogs);
  });

  app.post('/api/new/blog', requireLogin, async (req, res) => {
    const { title, body, author, likes } = req.body;

    const blog = new Blog({
      title,
      body,
      author,
      tags: tags.split(',').map(tag => tag),
      datePosted: Date.now(),
      likes,
      comments: comments.map(comment => comment)
    });

    res.send(blog);
  });
}