
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: "http://34.176.22.220:8000/api",
});


export default axiosInterceptorInstance;