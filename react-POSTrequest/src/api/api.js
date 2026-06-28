
import axios from 'axios'

//A custom Axios instance is a reusable Axios object created with axios.create() that stores common configurations (like base URL, headers, timeout, and interceptors) so you don't have to repeat them in every API request.
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type' : 'application/json'
  }
});

//Axios interceptors are used to automatically modify or process every HTTP request before it is sent and every HTTP response before it reaches your application.
api.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

api.interceptors.response.use(response => {
  console.log('Response ', response);
  return response;
},
(config) => {
  const token = localStorage.getItem('token');
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
},
(error) => {
  console.error('Request Error', error);
  return Promise.reject(error);
}
);

api.interceptors.response.use((response)=>{
  // success check, return data

    return response;
  },
  (error)=>{
    if(error.response && error.response.status == 401){
      console.error('Unauthorezed!')
    }
    if(error.response && error.response.status == 500){
      console.error('Server Error!')
    }
    return Promise.reject(error);
  }
);



export default api;