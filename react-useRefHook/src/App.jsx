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

  // Example: Focusing an input element using useRef
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow'; // Change background color to indicate focus

  }
  const resetFocus = () => {
    inputRef.current.blur();
    inputRef.current.style.backgroundColor = ''; // Reset background color
  }
  
  return (
    <div className="App">
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={resetFocus}>Reset Focus</button>




      {/* Example: Using useRef to store a mutable value that does not trigger re-renders */}
      <p>State Counter: {stateCounter}</p>
      <button onClick={() => incrementStateCounter()}>Increment State Counter</button>
      <p>Ref Counter: {refCounter.current}</p>
      <button onClick={() => incrementRefCounter()}>Increment Ref Counter</button>
    </div>
  )
}

export default App
