import { useRef } from 'react';
import './App.css'
import { useState } from 'react';

// useRef
// - persist values across renders
// - does not trigger a re-render when the value changes

function App() {
  const [stateCounter, setStateCounter] = useState(0);
  const refCounter = useRef(0);
  const incrementStateCounter = () => {
    setStateCounter(stateCounter + 1);
  }
  const incrementRefCounter = () => {
    refCounter.current += 1;
  }

  return (
    <div className="App">
      <p>State Counter: {stateCounter}</p>
      <button onClick={() => incrementStateCounter()}>Increment State Counter</button>
      <p>Ref Counter: {refCounter.current}</p>
      <button onClick={() => incrementRefCounter()}>Increment Ref Counter</button>
    </div>
  )
}

export default App
