const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

require('./models/Blog');
require('./models/User');
require('./models/Comment');

require('./services/passport');

const app = express();

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV === 'production'){
  mongoose.connect(keys.mongoURI);
} else {
  mongoose.connect('mongodb://localhost:27017/myblog');
}

mongoose.connection
  .once('open', () => console.log('Connected to MongoDB'))
  .on('error', error => console.log("Error connecting to MongoDB:", error));


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb'}));

app.use(passport.initialize());
app.use(passport.session()); 

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);
require('./routes/commentRoutes')(app);
require('./routes/likeRoutes')(app);

if(process.env.NODE_ENV === 'production'){

  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});