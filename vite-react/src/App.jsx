import './App.css'
import MyButton from './MyButton';
import ProfileCard from './ProfileCard';

function App() {

  return(
    <div>
      <h1>Hello react</h1>
      <MyButton />
      <ProfileCard name="John Doe" age="23" isMember = {true} />
      <ProfileCard name="Suvam Debnath" />
    </div>
  );
}


export default App
