import './App.css'
import { useState } from 'react'
import useCounter from './useCounter'

// Custom hooks in react are function that let you reuse logic across multiple components.
// starts with "use"

function App() {
 const {count , increment,decrement, reset} = useCounter(0);
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default App
