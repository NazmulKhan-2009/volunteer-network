import { Link } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import logo from "../../logos/Group 1329.png"
// import { eventType } from '../../FakeData';
const Admin = () => {
  
  const { register, handleSubmit, watch, errors } = useForm();
  
const onSubmit=(data)=>{

  const eventInfo={
    event:data.eventname,
    date:data.eventdate,
    describe:data.description,
    image:data.banner
  }



  fetch("https://damp-ridge-34013.herokuapp.com/addEvents",{
    method: "POST",
    headers:{ 
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(eventInfo)
  })
}

  return (
    <div>
      <nav>
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="" width="20%" />
        </Link>
      </nav>  
      <form onSubmit={handleSubmit(onSubmit)}>
            
             
            <label>
                <span>Event Title</span>
                <input type="text" name="eventname"   ref={register({ required: true })}/>
              </label>
                                      

              <label>
                <span>Event Date</span>
                <input type="date" name="eventdate"  ref={register({ required: true })}/>
              </label>

              <label>
                <span>Event Date</span>
                <input type="text" name="description"   ref={register({ required: true })}/>
              </label>
            
              <label>
              <br/><br/>
                <span>Banner</span>

                <input type="file" name="banner" ref={register({ required: true })}/>
              </label>


              
             
              
              <input type="submit" value="Submit"/>
              
              
            </form>






      {/* <button onClick={handleAddEvents}>Add Events</button> */}
    </div>
  );
};

export default Admin;