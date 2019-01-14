const mongoose = require('mongoose');

const Blog = mongoose.model('Blog');
const Comment = mongoose.model('Comment');

module.exports = (app) => {

  app.get('/api/blog/:id/comment', async (req, res) => {
    // fetch comments frpm a blog
  })

  app.post('/api/blog/:id/comment', async (req, res) => {

    const { content } = req.body;

     Blog.findById(req.params.id, (err, blog) => {
      if(err){
        console.log(err);
      } else {
        Comment.create({ content }, (err, comment) => {
          if(err){
            console.log(err);
          } else {
            blog.comments.push(comment);
            blog.save();
            console.log(blog);
          }
        });
      }
    });
  });
}