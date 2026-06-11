import './App.css'
import MyButton from './MyButton';
import ProfileCard from './ProfileCard';

function App() {

  const person = {
    name : "John Doe",
    age : 23,
    isMember : true
  };

  // setting up callback function for handling click event on hobbies
  const HandleHobbyClick = (hobby) => {
    alert(`You clicked on ${hobby}`);
  };

  const aliceProfile = {
    name : "Alice Smith",
    age : 30,
    isMember : false,
    hobbies : ["Cooking", "Traveling", "Painting"]
  };

  const SuvamProfile = {
    name : "Suvam Debnath",
    age : 25,
    isMember : true,
    hobbies : ["Reading", "Swimming", "Gaming"]
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
      <ProfileCard {...aliceProfile} onHobbyClick={HandleHobbyClick}/>
      <ProfileCard {...SuvamProfile} onHobbyClick={HandleHobbyClick}/>
    </div>
  );
}


export default App
