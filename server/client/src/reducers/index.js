import { combineReducers } from 'redux';
import photosReducer from './photosReducer';


export default combineReducers({
  photos: photosReducer,
});