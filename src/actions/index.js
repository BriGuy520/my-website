import jsonPlaceholder from '../api/jsonPlaceholder';
import { FETCH_PHOTOS } from './types';

export const fetchPhotos = () => async dispatch => {
  const response = await jsonPlaceholder.get('/photos');

  dispatch({ type: FETCH_PHOTOS, payload: response.data });
}
