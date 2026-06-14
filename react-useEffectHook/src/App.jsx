import { useState, useEffect } from 'react';
import './App.css'

function App() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // useEffect to update the document title whenever the count changes
  useEffect(() => {
    console.log('useEffect Triggered')
  }, [count]);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };
 
  return (
    <div className="App">
      <h1>useEffect Hook</h1>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default App
