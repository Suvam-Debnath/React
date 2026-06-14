import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Function to handle mouse movement and update position state
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove)
    
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="App">
      <h1>Mouse Tracker</h1>
      <p>Mouse Position: ({position.x}, {position.y})</p>
    </div>
  );
}

export default App
