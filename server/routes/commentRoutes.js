const Blog = require('../models/Blog');
const Comment = require('../models/Comment');

module.exports = (app) => {
  app.post('/api/comment', (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
      if(err){
        console.log(err);
      } else {
        Comment.create(req.body.commment, (err, comment) => {
          if(err){
            console.log(err);
          } else {
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            comment.save();
            blog.comments.push(comment);
            comment.save();
          }
        })
      }
    });
  });
}