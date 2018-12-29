import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0e3bff419c44f369ed46b8549584422391d59fc842fbe88d5ebf7228874b1d05'
  }
});