
import './App.css'

// Prop Drilling is the process of passing data from a parent component to a child component through multiple levels of components. This can lead to a lot of unnecessary props being passed down the component tree, which can make it difficult to manage and maintain the code.


function App() {
   const theme = 'dark';

  return (
    <ComponentA theme={theme} />
  )
}

function ComponentA({ theme }) {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB theme={theme} />
    </div>
  )
}

function ComponentB({ theme }) {
  return (
    <div>
      <h2>Component B</h2>
      <ComponentC theme={theme} />
    </div>
  )
}

function ComponentC({ theme }) {
  return (
    <div>
      <h2>Component C</h2>
      <p>Theme: {theme}</p>
    </div>
  )
}

export default App
