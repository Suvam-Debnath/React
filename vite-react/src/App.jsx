import './App.css'
import MyButton from './MyButton';
import ProfileCard from './ProfileCard';

function App() {
  const person = {
    name : "John Doe",
    age : 23,
    isMember : true
  };

  // --without destructureing, using dot notation--
  // const name = person.name;
  // const age = person.age;
  // const isMember = person.isMember;

  // with destructuring 
  const {name, age, isMember} = person;

  return(
    <div>
      <h1>Hello react</h1>
      <MyButton />
      <ProfileCard name="John Doe" age={23} isMember = {true} />
      <ProfileCard name="Suvam Debnath" age={25} isMember = {false}/>
    </div>
  );
}


export default App
