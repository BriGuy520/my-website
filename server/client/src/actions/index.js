import unsplash from '../api/unsplash';
import axios from 'axios';
import { 
  FETCH_PHOTOS, 
  FETCH_USER, 
  FETCH_BLOGS, 
  FETCH_BLOG, 
  FETCH_COMMENTS,
  AUTH_USER,
  AUTH_ERROR
} from './types';

export const fetchPhotos = () => async dispatch => {
  const response = await unsplash.get('/users/briguy520/photos', {
    params: { "username": "briguy520" }
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

export const fetchBlog = (id) => async dispatch => {
  const response = await axios.get(`/api/blog/${id}`);

  dispatch({ type: FETCH_BLOG, payload: response.data });
}

export const fetchComments = (id) => async dispatch => {
  const response = await axios.get(`/api/blog/${id}/comment`);

  dispatch({ type: FETCH_COMMENTS, payload: response.data });
}

export const signup = (formProps, callback) => async (dispatch) => {
  
  try {
    const response = await axios.post('http://localhost:3000/api/signup', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(err) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials, please try again"})
  }
}

export const signin = (formProps, callback) => async (dispatch) => {

  try {
    const response = await axios.post('http://localhost:3000/api/signin', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });

    localStorage.setItem('token', response.data.token);
    callback();
  } catch(err){
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
}