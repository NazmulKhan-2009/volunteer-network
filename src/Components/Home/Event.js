import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Event = ({events}) => {
  const {key,image,title,bg}=events
  console.log( bg)
  const background=["#3F90FC" , "#FFBD3E" , "#FF7044" , "#3547DD"]
  // console.log( Math.ceil(Math.random()))
  const rand=Math.floor( Math.random()* Math.floor(4));

  return (
        
 
  <div className='col-sm-3 custom_event '>
    <Link to={`/register/${key}`}>
    <img src={image} alt="" width="80%"/>

    <div className='title' style={{background:background[rand]}}>
    <h5>{title}</h5>
    </div>
      
    </Link>
  
     
  </div>
 

      
    
      
    
  );
};

export default Event;



