import unsplash from '../api/unsplash';
import { FETCH_PHOTOS } from './types';

export const fetchPhotos = () => async dispatch => {
  const response = await unsplash.get('/photos/search', {
    params: { query: 'cars', per_page: 30 }
  });

  dispatch({ type: FETCH_PHOTOS, payload: response.data });
}
