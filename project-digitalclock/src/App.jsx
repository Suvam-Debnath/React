import React from 'react'
import './App.css'
import useState from 'react'
import useEffect from 'react'

function App() {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default App
