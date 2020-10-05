
import React from 'react';
import  { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
const Dashboard = () => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)

const [event, setEvent]=useState([])



useEffect(()=>{
fetch("http://localhost:5000/eventenrolled?email="+loggedInuser.email)
.then(res=>res.json())
// .then(data=>console.log(data[3]))
.then(data=>setEvent(data))
},[])

const cancel=(event, id)=>{
console.log(event.target);
fetch(`http://localhost:5000/delete/${id}` ,{
  method:'DELETE',

})
.then(res=>res.json())
.then(result=>{ 
  console.log("deleted successfuli");
})

}

  return (
    <div>
    
       <Header
         signBtn={true}
       />
       <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-12'>
            {
              event.map(eventList=>
              

              <div className="card mb-3 col-sm-12 col-md-5 float-left ml-5" >
                <div className="row g-0 ">
                  <div className="col-md-6">
                    <img src={eventList.image}  alt="..." className="w-75"/>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{eventList.title}</h5>
                      <h5 className="card-text">{eventList.date}</h5>
                      <button onClick={()=>cancel(event, `${eventList._id}`)} className="btn btn-dark mt-5">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              
              
              )
            }      
          </div>
        </div>
      </div>
    
      
    </div>
    
  );
};

export default Dashboard;

