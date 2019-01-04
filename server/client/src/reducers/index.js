import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import authReducer from './authReducer';


export default combineReducers({
  photos: photosReducer,
  auth: authReducer
});