import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { eventType } from '../../FakeData';
import Header from '../Header/Header';
import Event from './Event';

const Home = () => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  console.log( loggedInuser)

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
  // const eventData=eventType
  return (
    <div>
      <Header/>
      <div className='container mt-5'>
     <h1 style={{textAlign: 'center'}}>I grow by helping people in need.</h1> 
     <p style={{textAlign: 'center', color: 'red',fontWeight:"bold"}}>{loggedInuser.success? loggedInuser.name: <Link to="/login">Sign In</Link> }<span style={{color:"blue",marginLeft:"100px",cursor: "pointer"}} onClick={handleSignOut}>{loggedInuser.success?"SignOut": null}</span></p>
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
