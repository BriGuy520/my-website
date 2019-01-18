import unsplash from '../api/unsplash';
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
  console.log(values);
  const response = await axios.post('/api/blog', values);

  history.push('/blog');
  dispatch({ type: FETCH_USER, payload: response.data });
}

export const fetchBlogs = () => async dispatch => {
  const response = await axios.get('/api/blog');

  dispatch({ type: FETCH_BLOGS, payload: response.data });
}

export const fetchBlog = (id) => async dispatch => {
  const response = await axios.get(`/api/blog/${id}`);

  dispatch({ type: FETCH_BLOG, payload: response.data });
}

export const submitComment = (comment, history, id) => async dispatch => {
  const response = await axios.post(`/api/blog/${id}/comment`, comment);

  history.push(`/blog/${id}`)
  dispatch({ type: FETCH_USER, payload: response.data });
} 

export const fetchComments = (id) => async dispatch => {
  const response = await axios.get(`/api/blog/${id}`);

  dispatch({ type: FETCH_BLOGS, payload: response.data })
}