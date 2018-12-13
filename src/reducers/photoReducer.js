import { GET_PHOTOS } from '../actions/types';

export default (state = {}, action) => {

  switch(action.type){
    case GET_PHOTOS:
      return action.payload;
    default: 
      return state;
  }

}