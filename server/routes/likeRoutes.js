const mongoose = require('mongoose');

const Comment = mongoose.model('Comment');
const Blog = mongoose.model('Blog');

module.exports = (app) => {

  app.post('/api/blog/:id/comment/like', async(req, res) => {

    const { likes } = req.body;

    await Comment.findOne({ _id: req.body._id })
      .then(data => {

        console.log(data);
    
      })
      .catch(err => {
        console.log(err);
      })
  });

  app.post('/api/blog/:id/like', async(req, res) => {

    await Blog.findOne({ id: req.params._id })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  })

}