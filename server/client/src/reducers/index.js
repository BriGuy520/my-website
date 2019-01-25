import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import photosReducer from './photosReducer';
import tweetsReducer from './tweetsReducer';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
  form: formReducer,
  photos: photosReducer,
  tweets: tweetsReducer,
  auth: authReducer,
  blogs: blogReducer,
  comments: commentsReducer
});