import { FETCH_BLOGS } from '../actions/types';

export default (state = [], action) => {
  switch(action.type){
    case FETCH_BLOGS:
      return action.payload;
    default:
      return state;
  }
}