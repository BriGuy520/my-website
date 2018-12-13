import unsplash from '../api/unsplash';
// import { GET_PHOTOS } from './types';

export const getPhotos = () => async dispatch => {
  const response = await unsplash.get('/search/photos', {
    params: { query: 'cars' },
    headers: {
      Authorization: 'Client-ID 0e3bff419c44f369ed46b8549584422391d59fc842fbe88d5ebf7228874b1d05'
    }
  });

  console.log(response.data.results);

  // dispatch({ type: GET_PHOTOS, payload: response.data });
}