import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData]=useState(null);
  useEffect(()=>{
    fetch("https://reqres.in/api/users")
    .then(response=>response.json())
    .then(response=>{
      console.log(response.data)
      setData(response.data)
      console.log(response.data)
    })
  },[]);
  return (
    <>
    <div>
    <input class="inputbox" type="text"/>
    <button class="searchbutton">Search</button>
    </div>
    <div>
   
    <table >
   
      {
        data && data.map((item)=>{
          return (
            <>
              
            <tr> 
              <td class="tddiv"> 
              <div class="imagediv"><img src={item.avatar}></img></div>
              </td>
            
            <td>
              <div>Id:{item.id}</div>
              <div>Email:{item.email}</div>
              <div>FirstName:{item.first_name}   LastName:{item.last_name}</div>
              </td>
              </tr>
                </>
              
              );                   
        })
      }
      
      </table>
    </div>
    </>
  );
}

export default App;
