import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-f649b-default-rtdb.firebaseio.com/'
})

export default instance;
