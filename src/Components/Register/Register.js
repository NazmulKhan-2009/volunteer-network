import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import { userContext } from '../../App';
// import { eventType } from '../../FakeData';
import logo from "../../logos/Group 1329.png"
const Register = () => {
  const [events, setEvents]=useState([])
  // console.log(selectedEvents )
  const {regSuccess, setRegSuccess}=useState(null)
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  const {eventsKey}=useParams()
 

  let history = useHistory();

  const onSubmit=(data)=>{
    
    
    const details={
      email:loggedInuser.email,
      name:loggedInuser.name,
      date:data.date,
      title:data.Event,
      task:data.Task,
      image:events.image
    }
    console.log( details)

    fetch("https://damp-ridge-34013.herokuapp.com/enrolledevents",{
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(details)
  })
  .then(res=>res.json())
  .then(data=>{ console.log(data)
    // if(data){
    //   console.log( "data grabbed")
    //   // processOrder()
    //   //   alert("Your Order is succesfully")
    // }
  })

    history.push("/dashboard");
    
      
    
    
}
useEffect(()=>{
  fetch("https://damp-ridge-34013.herokuapp.com/event")
  .then(res=>res.json())
  // .then(data=>setSelectedEvents(data))
  // .then(data=>console.log(data[eventsKey]))
  .then(data=>setEvents(data[eventsKey]))

},[eventsKey])
      
// const events= selectedEvents[eventsKey]
// const events= eventType[eventsKey]
// console.log( events)



  return (
    <div className='container nav_bg sign-in-wrapper'>
      <div className='row '>
      <Link className="navbar-brand text-center mt-5 mb-5" to="/home">
          <img src={logo} alt="" width="25%" />
        </Link>
        <p style={{textAlign: 'center', color: 'red',fontWeight:"bold"}}>{loggedInuser.name}</p>
        <div className='col-sm-12 col-md-6 mx-auto  my-form'>
        <h4>Register As Volunteer</h4>

        
            <form onSubmit={handleSubmit(onSubmit)}>
            
             
            <label>
                <span>Full Name</span>
                <input type="text" name="Fullname" defaultValue={loggedInuser.name}  ref={register({ required: true })}/>
              </label>
                      
              <label>
                <span>User Name or email</span>
                <input type="email" name="email" defaultValue={loggedInuser.email}  ref={register({ required: true })}/>
              </label>
            

              <label>
                <span>Date</span>
                <input type="date" name="date"  ref={register({ required: true })}/>
              </label>
            
              <label>
                <span>Description</span>
                <input type="text" name="Task" ref={register({ required: true })}/>
              </label>


              <label>
                <span>Events Name</span>
                <input type="text" name="Event" defaultValue={events.title} ref={register({ required: true })}/>
              </label>
             
              
              <input type="submit" value="Registration"/>
              
              
            </form>

            

            
            
              
             
                
                
          </div>
        </div>
      </div>
  );
};

export default Register;