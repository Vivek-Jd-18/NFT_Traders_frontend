import axios from 'axios';
const API_ENDPOINT = "http://3.13.191.138:8000/";
// const API_ENDPOINT = "http://localhost:8000/";




export default axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
