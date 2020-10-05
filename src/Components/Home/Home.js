import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
// import { eventType } from '../../FakeData';
import Header from '../Header/Header';
import Event from './Event';

const Home = () => {
  const[eventType, setEventType]=useState([])
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  console.log( loggedInuser)
  let history = useHistory();
  const handleSignOut=()=>{
    setloggedInUser({
    email:"",
    password:"",
    name:"",
    photo:"",
    isSignedIn:false, 
    error:'',
    success:false
    })
  }
useEffect(()=>{
  fetch("https://damp-ridge-34013.herokuapp.com/event")
  .then(res=>res.json())
  .then(data=>setEventType(data))
},[])

const handleSignin=()=>{
  history.push("/login");
}
  return (
    <div>
      <Header/>
      <div className='container mt-5'>
      {loggedInuser.isSignedIn ?<><span style={{color: 'blue',fontWeight:"bold"}}>Logged in as :</span> <span style={{color: 'red',fontWeight:"bold"}}>{loggedInuser.name || loggedInuser.email}</span> <span onClick={handleSignOut} className="btn btn-dark" style={{color:'white',fontWeight:"bold"}}>Sign Out</span></> : 
      <span onClick={handleSignin} className="btn btn-dark" style={{color:'white',fontWeight:"bold"}}>Sign In</span>}
      
     <h1 style={{textAlign: 'center'}}>I grow by helping people in need.</h1> 
     
     <form class="d-flex w-50 mx-auto m-5" >
        <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        <div className='row'>
          <div className='col-sm-12 col-md-12 mx-auto '>
            {
              eventType.map(events=><Event
                key={events.key}
                events={events}
              />)
            }
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Home;
