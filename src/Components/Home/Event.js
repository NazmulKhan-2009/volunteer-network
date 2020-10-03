import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Event = ({events}) => {
  const {key,image,title,bg}=events
  console.log( bg)
  return (
    
  
      
    

      
 
  <div className='col-sm-3 custom_event '>
    <Link to={`/dashboard/${key}`}>
    <img src={image} alt="" width="80%"/>

    <div className='title' style={{background:bg}}>
    <h5>{title}</h5>
    </div>
      
    </Link>
  
     
  </div>
 

      
    
      
    
  );
};

export default Event;



