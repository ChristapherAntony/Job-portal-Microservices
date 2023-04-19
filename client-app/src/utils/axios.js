import axios from 'axios';
import { baseUrl } from './Constants';


const instance = axios.create({
  baseURL: baseUrl,
  headers: req.headers

});

export default instance


// baseURL: 'http://www.ticketing-app-prod.xyz/'