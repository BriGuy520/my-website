import { FETCH_BLOGS, FETCH_BLOG } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_BLOGS:
      return action.payload;
    case FETCH_BLOG:
      console.log(action);
      return { ...state, [action.payload._id]: action.payload};
    default:
      return state;
  }
}