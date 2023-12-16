
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: "http://focasoft.tis.cs.umss.edu.bo/api",
});


export default axiosInterceptorInstance;