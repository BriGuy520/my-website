const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect();

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

if(process.env.NODE_ENV === 'production'){

  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);