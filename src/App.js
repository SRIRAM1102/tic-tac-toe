import logo from './logo.svg';
import './App.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {Link,Redirect,Route,Switch, useParams } from 'react-router-dom';
import './Details'

import {Eg} from "./eg"
import{useState} from "react";
import { Details } from './Details';
import { Tictacktoe } from './Tictacktoe';

function App() {

const data=[{name:"apple",model:"11pro",specs:{ram:1,bt:"5000mah",price:"22k"}},
{name:"mi",model:"note",specs:{ram:100,bt:"1000mah",price:"122k"}},
{name:"asus",model:"pro11",specs:{ram:5,bt:"900mah",price:"2k"}}];
  return (
    <div>
   <Tictacktoe/>
{/* <Eg/> */}
    </div>

  );
}

function Card(props)

{
  const [show,setshow]=useState(false);
  const[search,setsearch]=useState("");

  return(
<div className="card">
<input type="text" placeholder="Name.." onChange={(event)=>setsearch(event.target.value)}/>{search}
<input type="text" placeholder="ID...."/>
<h3>Name:{props.name}</h3>
<h4>Model:{props.model}</h4>
<button onClick={()=>setshow(!show)}>{show ? "showless" : "shomore"}</button>
{show ? <Specification specsi={props.specs}/> : " "}
</div>
  );
}

function Specification(props)

{

  return(     
  <div>
    <p><u>Specification</u></p>
  <p>Ram:{props.specsi.ram}</p>
  <p>Bt{props.specsi.bt}</p>
  <p>Price{props.specsi.price}</p>
   </div>
  );
}

function Home()
{
  return(
    <h1>Home Page</h1>
  );
}

function About()
{
  return(
    <h1>About Page</h1>
  );
}
function Added( )
{
  const {useid}=useParams();
    return(
        <h1>Added sucessfully{useid}</h1>
    );
}
function Notfound()
{
  return(
    <h1>404 Error!!!!!!!</h1>
  );
}
export default App;


//  <Link to="/home">Home</Link>
// <Link to="/about">About</Link>
// <Link to="/details">Details</Link>
// <Link to="/redirect">Redirect</Link>
// <Link to="/tictacktoe">Ticktactoe</Link>
// <Link to="/tictacktoe">overview</Link>
//    <Switch>
//     <Route path="/home">
//       <Home />
//     </Route>
    {/* <Route path="/overview">
      <Overview />
    </Route> */}
  //   <Route path="/about">
  //     <About />
  //     </Route>
  //     <Route path="/details">
  //  <Details/>
  //     </Route>
  //     <Route path="/added/:useid">
  //     <Added />
  //     </Route>
  //     <Route path="/tictacktoe">
  //  <Tictacktoe/>
  //     </Route>
  //     <Route path="/redirect">
  //     <Redirect to ="/home"/>
  //        </Route>
      {/* <Route path="*">
      <Notfound />
      </Route>
  </Switch>  */}