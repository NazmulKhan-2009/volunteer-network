import React, { useContext } from 'react';
import "./Header.css";
import logo from "../../logos/Group 1329.png"
import { userContext } from '../../App';
import { Link } from 'react-router-dom';
const Header = ({signBtn}) => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)

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



  return (
  
    <div className="container">
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light ">
      
      
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="" width="50%" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 pr-5 ml-auto" >
            <li className="nav-item pr-4">
              <Link className="nav-link"  to="/home">Home</Link>
            </li>
            <li className="nav-item pr-4">
              <Link className="nav-link" to="/donation">Donation</Link>
            </li>
            <li className="nav-item pr-4">
              <Link className="nav-link" to="/dashboard">Event</Link>
            </li>
            <li className="nav-item pr-4">
              <Link className="nav-link" to="/">Blog</Link>
            </li>         
          </ul>

          {signBtn? 
          <div>
          <span style={{fontWeight:"bold",color:"blue"}}>{loggedInuser.name}</span>
          <span onClick={handleSignOut} style={{fontWeight:"bold",color:"red",cursor: "pointer"}} className="p-2">SignOut</span>
          </div>
          :
          <div>
          <Link  type="button" class="btn btn-primary m-3">Register</Link>
          <Link to="/admin" type="button" class="btn btn-secondary">Admin</Link>
          </div>
          
          }
        </div>
        </nav>
      </div>
      
    
    </div>

  
  );
};

export default Header;