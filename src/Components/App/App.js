import React, {useState} from 'react';
// import axios from 'axios';
import database from '../Firebase/Fire';
import "./App.css";
  
function App() {
  const [name , setName] = useState();
  const [age , setAge] = useState();
      
  // Push Function
  const Push = () => {
    database.ref("user").set({
      name : name,
      age : age,
    }).catch(alert);
  }

  // const [data, setData] = useState("")
  // useEffect(()=> {
  //   axios
  //     .get("https://avis-queue-default-rtdb.firebaseio.com/user")
  //     .then(resp=>{
  //       setData(resp.data);
  //     });
  // },[]);
  
  return (
    <div className="App" style={{marginTop : 250}}>
      <center>
      <input placeholder="Enter your name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </center>
    </div>
  );
}
  
export default App;