const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Blog = mongoose.model('blogs');

module.exports = (app) => {

  // Show all blogs
  app.get('/api/blog', async (req, res) => {
    const blogs = await Blog.find({ _user: req.user.id });

    res.send(blogs);
  });

  app.post('/api/blog', requireLogin, async (req, res) => {
    const { title, body, image, likes, comments } = req.body;

    const blog = new Blog({
      title,
      image,
      body,
      _author: req.user.id,
      likes,
      datePosted: Date.now(),
      comments
    })
    
    blog.save();


    res.send(blog);
  });

  app.get('blog/:id', (req, res) => {
    Blog.findById(req.params.id).populate("comments").exec((err, foundBlog) => {
      if(err){
        console.log(err);
      } else {
        res.render("blog/:id", {blog: foundBlog });
      }
    })
  })
}