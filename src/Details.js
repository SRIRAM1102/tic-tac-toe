import {useEffect, useState} from "react";
import { useHistory } from "react-router";

const initial=[{name:"sri",age:21,id:1},{name:"ram",age:2,id:2},{name:"raj",age:221,id:3}];



export function Details() {
    const [user,setuser]=useState([]);
    const[username,setname]=useState("");
      const[userage,setage]=useState("");
   
function getData()
{
    fetch('https://60efffbdf587af00179d3c0e.mockapi.io/data')
    .then(data=>data.json())
    .then(user=>setuser(user));
}
function deleteUser(id)
{
    fetch(`https://60efffbdf587af00179d3c0e.mockapi.io/data/${id}`,{
        method:"DELETE",
         })
         .then((data)=>data.json())
         .then((user)=>getData(user));
    
}

function addUser()
{
    fetch('https://60efffbdf587af00179d3c0e.mockapi.io/data',{
        method:"POST",
        header:{
            ContentType:"application/json",
        },
        body:JSON.stringify({name:username,age:userage})
    })
    .then((data)=>data.json())
    .then((user)=>console.log(user))
}

function editUser(id)
{
    fetch(`https://60efffbdf587af00179d3c0e.mockapi.io/data${id}`,{
        method:"POST",
        header:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name:username,age:userage})
    })
    .then((data)=>data.json())
    .then((user)=>getData(user))
}
useEffect(()=>getData(),[]);
   

  return ( 
      <div>
         <input type="text" placeholder="Name:" onChange={(event)=>setname(event.target.value)}/>
            <input type="text" placeholder="Age:" onChange={(event)=>setage(event.target.value)}/>
            <button onClick={()=>addUser()}>add</button>

               {/* without crud operations */}
               {/* <button onClick={()=>setuser([... user,{name:username,age:userage}])}>add</button>   */}

            {user.map((user)=> <Zen name={user.name} age={user.age} id={user.id} deleteUser={deleteUser} editUser={editUser}/>)}
            
      </div>
  
 
    
  );
}

 function Zen({name,age,id,deleteUser,editUser})
{
    const history=useHistory();
    return(
        // onClick={()=>history.push("/added/"+ id)}------- "to change url"
        <div className="userdetail">
       <h4>Name:{name}</h4>
        <h4>Age:{age}</h4>
        <button onClick={()=>deleteUser(id)}>DELETE</button>
        <button onClick={()=>editUser(id)}>EDIT</button>
        </div>
    );
       
 
}
