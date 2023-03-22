const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const fs = require('fs');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const AWS = require('aws-sdk');
const keys = require('../config/keys');

const Blog = mongoose.model('Blog');
const User = mongoose.model('User');


let finalFilenamePost;
let finalFilenameImage;

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

AWS.config.update({
  accessKeyId: keys.awsAccessKeyID,
  secretAccessKey: keys.awsSecretAccessKey
});

// create S3 instance
const s3 = new AWS.S3({
  region: 'us-east-2',

});


const uploadToS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: keys.s3BucketName,
    key: function (req, file, cb) {
      if (file.fieldname === 'image') {
        finalFilenameImage = Date.now().toString() + '-' + file.originalname;

        cb(null,'content/images/' + finalFilenameImage);
      } else if(file.fieldname === 'post'){

        finalFilenamePost = Date.now().toString() + '-' + file.originalname

        cb(null,'content/posts/' + finalFilenamePost);
      }
    }
  })
});


module.exports = (app) => {
  // Show all blogs
  app.get('/api/blog', async (req, res) => {

    try {
      const blogs = await Blog.find({});
  
      const blogsWithFiles = await Promise.all(
        blogs.map(async (blog) => {

          const { post, image, ...rest } = blog;

          const postFile = await s3.getObject({
            Bucket: keys.s3BucketName,
            Key: "content/posts/" + post,
          }).promise();

          const imageFile = await s3.getObject({
            Bucket: keys.s3BucketName,
            Key: "content/images/" + image,
          }).promise();

          return {
            ...rest,
            post: postFile.Body,
            image: imageFile.Body,
          };
        })
      );
  
      res.send(blogsWithFiles);
    } catch (error) {

      console.log(error);
      res.status(500).send('Internal server error');
    }
  });

  app.post('/api/blog', requireLogin, uploadToS3.fields([
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
          post: finalFilenamePost,
          image: finalFilenameImage,
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

  app.get('/api/blog/:id', async (req, res) => {
    Blog.findById(req.params.id)
      .exec()
      .then(async data => {

        const { post, image, ...rest } = data;
  
        const dataWithFiles = await Promise.all([
          s3.getObject({
            Bucket: keys.s3BucketName,
            Key: "content/posts/" + post,
          }).promise().then(data => data.Body),
        
          s3.getObject({
            Bucket: keys.s3BucketName,
            Key: "content/images/" + image,
          }).promise().then(data => data.Body),
        ]).then(([postFile, imageFile]) => {

          return {
              _id: data._id,
              title: data.title,
              description: data.description,
              post: data.post,
              image: data.image,
              author: data.author,
              datePosted: data.datePosted,
              likes: data.likes,
              userLikes: data.userLikes,
              __v: data.__v,
              imageFile: imageFile,
              postFile: postFile
          };
        });

        console.log(dataWithFiles)

        res.status(200).json(dataWithFiles);

      }).catch(err => {

        res.status(400).json({ error: err });
      });
  });
}