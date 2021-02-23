import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData]=useState(null);
  const [inputData, setInput] = useState("");
  const [intitial, setInitial] = useState("");
  useEffect(()=>{
    fetch("https://reqres.in/api/users")
    .then(response=>response.json())
    .then(response=>{
      setData(response.data)
      setInitial(response.data);
    })
  },[]); 

  const setChange=(e) => {
    if(e.target.value==""){
      setData(intitial);
    }
    setInput(e.target.value)
  }


  const search = () => {
    setData(data.filter((item) => {
      return inputData.toLowerCase() == item.first_name.toLowerCase()
    }))
  }
  
  return (
    <>
    <div>
    <input  type="text" value={inputData} onChange={setChange} placeholder="Search by first name"/>
    <button  onClick={search}>Search</button>
    </div>
    <div>
   
    <table >
    <tbody>
   
      {
        data && data.map((item,index)=>{
          return (
           
              
            <tr key={index}> 
              <td> 
              <div><img src={item.avatar}></img></div>
              </td>
            
            <td>
              <div>Id:{item.id}</div>
              <div>Email:{item.email}</div>
              <div>FirstName:{item.first_name}   LastName:{item.last_name}</div>
              </td>
              </tr>
              
              
              );                   
        })
      }
      </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
