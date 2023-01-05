import axios from "axios" ;
import { useEffect,useState } from "react";

import './App.css';

function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
axios.get('http://localhost:5000/users')
.then (data=>setData(data.data))
.catch (err=>console.log (err))
  },[data])
  const onsubmit=(event)=>{
    event.preventDefault()
    const data= {
      name:event.target.name.value ,
      email:event.target.email.value ,
      age:event.target.age.value ,
    }
    axios.post('http://localhost:5000/saveUser',data )
    .then (data=>console.log (data) )
    .catch (err=>console.log (err))

    //console.log ('text',event.target.name.value)
    //console.log ('text',event.target.email.value)
   // console.log ('text',event.target.age.value)

    }
const deleteuser=(evant)=>{
  const email = evant.email.value 
  console.log (email)
  axios.delete('http://localhost:5000/user/delete',{email:email})
  .then (data=>console.log (data,'deleted') )
  .catch (err=>console.log (err))
}
  return (
    <div className="App">
      <form onSubmit={onsubmit}>
      <input type="text" name='name' placeholder='name' />
      <input type="text" name='email' placeholder='email'/>
      <input type="number" name='age' placeholder='age'  />
      <button type="submit" >
       submit 
      </button>
    </form>
    <div>

      {data.map(usr=>(<div><h3>{usr.name}</h3><button onClick={deleteuser}></button></div>))}

    </div>
    </div>
  );
}

export default App;
