
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});


export default axiosInterceptorInstance;