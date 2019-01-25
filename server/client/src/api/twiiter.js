import axios  from 'axios';

export default axios.create({
  baseURL: 'https://api.twitter.com/1.1/statuses/user_timeline.json'
});