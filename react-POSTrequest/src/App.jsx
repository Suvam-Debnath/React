
import './App.css'
import axios from 'axios'
import React, { useState } from 'react'

//A custom Axios instance is a reusable Axios object created with axios.create() that stores common configurations (like base URL, headers, timeout, and interceptors) so you don't have to repeat them in every API request.
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization' : 'Bearer <TOKEN>'
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
});

function App() {
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
    }
    api.post('/posts', newPost)
    .then(response => {
      console.log('New Post Added: ', response.data);
      setData([response.data]);
    })
  };
  return (
   <div>
    <h1>api in react</h1>
    <form onSubmit = {handleSubmit}>
      <button type='submit'>Add post</button>
    </form>
   </div>
  )
}

export default App
