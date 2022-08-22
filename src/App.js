import logo from './logo.svg';
import './App.css';
import UserProfile from './Components/UserProfile';

function App() {

  const skillsets =["java","react","js","html","css"];
  const name =" Binod_Nayak";
  const avatar_url ="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  const title ="SDE-II"
  return (
    <div className="App">

      {/* <h1>UserProfile</h1> */}
      <UserProfile skillsets={skillsets} name={name} avatar_url={avatar_url} title={title}/>
    </div>
  );
}

export default App;
