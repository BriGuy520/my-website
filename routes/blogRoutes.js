const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const files = require('../services/files');

const Blog = mongoose.model('Blog');
const User = mongoose.model('User');

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // Set the destination folder where uploaded files will be stored
      if (file.fieldname === 'image') {
        cb(null, path.join(process.cwd(), 'client', 'public', 'content', 'images'));
      } else if (file.fieldname === 'post') {
        cb(null, path.join(process.cwd(), 'client', 'public', 'content', 'posts'));
      }
    },
    filename: function (req, file, cb) {
      // Set the filename for the uploaded file
      cb(null, file.originalname);
    }
  })
});

module.exports = (app) => {

  // SAVE IN CASE THIS DOESN'T WORK: { id: req.params.id }

  // Show all blogs
  app.get('/api/blog', async (req, res) => {
    const blogs = await Blog.find({});

    res.send(blogs);
  });

  app.post('/api/blog', requireLogin, upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'post', maxCount: 1 }
  ]), (req, res) => {

    const imageFile = req.files['image'][0];
    const postFile = req.files['post'][0];

    const { title, description, likes } = req.body;

   
     User.findOne({ _id: req.user})
      .then(data => {
        const username = data.google.username || data.twitter.username || data.facebook.username || data.github.username || data.local.username;

        const blog = new Blog({
          title,
          description,
          post: postFile.originalname,
          image: imageFile.originalname,
          author: username,
          likes,
          datePosted: Date.now()
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
      .exec()
      .then(data => {

        res.status(200).json(data);
      }).catch(err => {
        res.status(400).json({ error: err });
      });
  });
}