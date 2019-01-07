import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import photosReducer from './photosReducer';
import authReducer from './authReducer';
import blogReducer from './blogReducer';


export default combineReducers({
  form: formReducer,
  photos: photosReducer,
  auth: authReducer,
  blogs: blogReducer
});