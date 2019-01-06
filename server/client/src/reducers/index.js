import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import authReducer from './authReducer';
import blogReducer from './blogReducer';


export default combineReducers({
  photos: photosReducer,
  auth: authReducer,
  blogs: blogReducer
});