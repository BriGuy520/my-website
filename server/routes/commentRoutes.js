const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Blog = mongoose.model('Blog');
const Comment = mongoose.model('Comment');

module.exports = (app) => {

  app.get('/api/blog/:id/comment', async (req, res) => {
    // fetch comments from a blog
    Blog.findById(req.params.id)
      .populate("comments")
      .exec()
      .then(data => {
        res.status(200).json(data);
      }).catch(err => {
        res.status(400).json({ error: err })
      });
  });

  app.post('/api/blog/:id/comment', async (req, res) => {

    const { content, author } = req.body;

    Blog.findById(req.params.id)
      .exec((err, blog) => {
        if(err){
          console.log(err);
        } else {
          const comment = new Comment({ 
            content, 
            author
          });

          blog.comments.push(comment);
          blog.save();

          res.send(blog);
        }
      });
  });
}