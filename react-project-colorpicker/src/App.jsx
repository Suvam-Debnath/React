import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const colors = ['#00eeff', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ff2f00']

  const handleColorClick = (color) => {
    setBackgroundColor(color)
  }

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Color Picker</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
      <input className="color-picker" type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
    </div>
  )
}

export default App
