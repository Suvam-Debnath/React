//userState - react hook that lets you add and manage state (data that can change over time) in a functional component. It returns an array with two elements: the current state value and a function to update that state value. You can use it to create dynamic and interactive components in your React application.

import './App.css'
import { useState } from 'react'

// - State updates are asynchronous in nature 
// - You need to use updater functiuon for multiple state updates in a single function call


function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const incrementCount = () => {
    setCount(count + step)
  }
  const decrementCount = () => {
    setCount(count - step)
  }
  const resetCount = () => {
    setCount(0)
  }
  const incrementTwice = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  // You can store arrays, objects, or even more complex data structures in state using state.
  const [counters, setCounters] = useState([{id: 1, value: 0}])
  const addCounter = () => {
    const newCounter = {id: counters.length + 1, value: 0}
    setCounters([...counters, newCounter])
  }
  const incrementCounter = (id) => {
    setCounters(counters.map(counter => counter.id === id ? {...counter, value: counter.value + 1} : counter))
  }

  return (
    <div className="app-container">
      <h1>react hooks</h1>
      <p>Counter value :  {count} times</p>
      <p>Step value :  {step}</p>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={incrementCount}>
        Increase count
      </button>
      <button onClick={decrementCount}>
        Decrease count
      </button>
      <button onClick={resetCount}>
        Reset count
      </button>
      <button onClick={incrementTwice}>
        +2
      </button>

      <button onClick={addCounter}>
        Add Counter
      </button>
      <ul>
        {counters.map(counter => (
          <li key={counter.id}>
            Counter {counter.id} : {counter.value}
            <button onClick={() => {incrementfCounter(counter.id)}}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
