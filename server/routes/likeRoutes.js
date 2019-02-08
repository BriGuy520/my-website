const mongoose = require('mongoose');

const Comment = mongoose.model('Comment');
const Blog = mongoose.model('Blog');

module.exports = (app) => {

  app.post('/api/blog/:id/comment/like', async (req, res) => {

    const { likes } = req.body;

    await Comment.findOne({ id: req.body._id })
      .then(data => {

        console.log(data);
    
      })
      .catch(err => {
        console.log(err);
      })
  });

  app.post('/api/blog/:id/like', async (req, res) => {

    console.log(req.params.id);
    const blog = await Blog.findOneAndUpdate({_id: req.params.id}, {
      $inc:{ 'likes': 1 }
    }).exec();
    
    console.log(blog);
    res.send(blog);
  });

}