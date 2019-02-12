import { FETCH_COMMENTS } from '../actions/types';

export default (state = [], action) => {
  switch(action.type){
    case FETCH_COMMENTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}