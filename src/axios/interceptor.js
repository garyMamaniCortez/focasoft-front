
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:8000/api",
 //baseURL: "http://34.125.10.248:8000/api",
});


export default axiosInterceptorInstance;