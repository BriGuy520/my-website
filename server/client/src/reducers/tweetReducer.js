import { FETCH_TWEETS } from '../actions/types';

export default(state = [], action) => {
  switch(action.type){
    case FETCH_TWEETS:
      return action.payload;
    default: 
      return state;
  }
}