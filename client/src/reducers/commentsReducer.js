import { FETCH_COMMENTS } from '../actions/types';

export default (state = [], action) => {
  switch(action.type){
    case FETCH_COMMENTS:
      console.log(action);
      return [...action.payload];
    default:
      return state;
  }
}