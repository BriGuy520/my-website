import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import photosReducer from './photosReducer';
import authReducer from './authReducer';
import loginReducer from './loginReducer';
import blogReducer from './blogReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
  form: formReducer,
  photos: photosReducer,
  auth: authReducer,
  login: loginReducer,
  blogs: blogReducer,
  comments: commentsReducer
});