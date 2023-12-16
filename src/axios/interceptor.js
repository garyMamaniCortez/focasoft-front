
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
 // baseURL: "http://localhost:8000/api",
 baseURL: "http://focasoft.tis.cs.umss.edu.bo/api",
});


export default axiosInterceptorInstance;