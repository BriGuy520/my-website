const mongoose = require('mongoose');

const Blog = mongoose.model('Blog');
const Comment = mongoose.model('Comment');

module.exports = (app) => {

  app.get('/api/blog/:id/comment', async (req, res) => {
    // fetch comments from a blog
    console.log(req.params);
    const blog = await Blog.findById(req.params.id)
      .populate("comments")
      .exec()
      .then(data => {
        console.log(data);
        res.status(200).json(data);
      }).catch(err => {
        status(400).json({ error: err })
      });
  });

  app.post('/api/blog/:id/comment', async (req, res) => {

    const { content, author } = req.body;

    const comment = new Comment({ content });

    Blog.findById(req.params.id, (err, blog) => {
      if(err){
        console.log(err);
      } else {
        blog.comments.push(comment);
        blog.save();
      }
    });
  });
}