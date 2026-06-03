// 1. you can embed any valid java script expresson inside curly braces {} in jsx.
// 2. jsx attribute use camelcase syntax.


function App() {
   const isLoggedin = true;
  // if (isLoggedin) {
  //   return <h1>Welcome to React</h1>
  // }
  // return <h1>Please login to continue</h1>

  const element = <h1>
  {isLoggedin ? 'Welcome to React' : 'Please login to continue'}
  </h1>
  return(
    <div>
      {element}
    </div>
  )
}


export default App
