import React, { createContext, useContext } from 'react'
import './App.css'
import { useState } from 'react';

// useContext Hook is a way to share data between components without having to pass props down through every level of the component tree. It allows you to create a context object that can be accessed by any component in the tree, regardless of how deeply nested it is. This can help to simplify your code and make it easier to manage state across your application.

//provider is used to wrap the components that need access to the context value, and it takes a value prop that specifies the value of the context. Any component that is a descendant of the provider can access the context value using the useContext hook.

// Context.provider is used to provice a modified value to the components within its tree. This value is only accessible to the components wrapped by the Provider.

const ThemeContext = createContext('light');

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
   
  return (

    <div className="App">
      {/* GlobalComponent is outside the Provider, so it will use the default value of 'light' */}
      <GolbalComponent />

      {/* The components wrapped by the Provider will use the value provided by the Provider, which is the current theme state */}
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      <ComponentA />
    </ThemeContext.Provider>

    {/* The components wrapped by the Provider will use the value provided by the Provider, which is the current theme state */}
    <ThemeContext.Provider value='dark'>
        <GolbalComponent />
    </ThemeContext.Provider>
    </div>
  )
}

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  )
}

function ComponentB() {
  return (
    <div>
      <h2>Component B</h2>
      <ComponentC  />
    </div>
  )
}

function ComponentC() {
    const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>Component C</h2>
      <p>Theme: {theme}</p>
    </div>
  )
}

function GolbalComponent() {
    const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>Golbal Component [Outside Provider]</h2>
      <p>Theme: {theme}</p>
    </div>
  )
}

export default App
