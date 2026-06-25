import React, { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data)
        setLoading(false);
        //throw new Error('Something went wrong');
      })
      .catch((error) => {
          console.log('Error fetching data: ', error);
          setError('Failed to set data');
          setLoading(false);
      });
  },[]);

  if(loading){
    return <p>Loading....</p>
  }

  if(error){
    return <p>{error}</p>
  }

  return (
   <div>
    <h2>API's</h2>
    <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
   </div>
  )
}

export default App
