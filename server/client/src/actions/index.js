import unsplash from '../api/unsplash';
import blog from '../api/blog';
import axios from 'axios';
import { FETCH_PHOTOS, FETCH_USER, FETCH_BLOGS, FETCH_BLOG } from './types';

export const fetchPhotos = () => async dispatch => {
  const response = await unsplash.get('/photos/search', {
    params: { query: 'cars', per_page: 30 }
  });

  dispatch({ type: FETCH_PHOTOS, payload: response.data });
}

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: response.data });
}

export const submitBlog = (values, history) => async dispatch => {
  const response = await axios.post('/api/blog', values);

  history.push('/blog');
  dispatch({ type: FETCH_USER, payload: response.data });
}

export const fetchBlogs = () => async dispatch => {
  const response = await axios.get('/api/blog');

  dispatch({ type: FETCH_BLOGS, payload: response.data });
}

export const fetchBlog = () => async dispatch => {
  const response = await axios.get('/api/blog/:id');

  dispatch({ type: FETCH_BLOG, payload: response.data });
}
