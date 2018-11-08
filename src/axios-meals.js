import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://meal-planer.firebaseio.com/'
});

export default instance;
