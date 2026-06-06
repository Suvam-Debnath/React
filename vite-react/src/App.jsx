
function WelcomeMessage(name){
  return <h1>Hello, {name} </h1>
}

function Greeting(isMorning){
  if(isMorning){
    return <h1>Good Morning</h1>
  }
  else{
    return <h1>Good Evening</h1>
  }
}

function AlertBox(message){
  return <div className='alert'>{message}</div>
}

function showAlert(condition, message){
  if(condition){
    return AlertBox(message);
  }
  else{
    return null;
  }
}

function App() {

  // this is single line comment 
  /*
  This is multi line comment
  */

const now = new Date();
const isMorning = now.getHours() < 12;

  return(
    <div>
      {/* // this is single line commment inside jsx */}
      {/* 
        this is multiline comment inside jsx
       */}
      {WelcomeMessage("suvam")}
      {WelcomeMessage("Alice")}
      {WelcomeMessage("Bobby")}

      {Greeting(isMorning)}

      {showAlert(true, "This is an alert message!")}
    </div>
  )
}


export default App
