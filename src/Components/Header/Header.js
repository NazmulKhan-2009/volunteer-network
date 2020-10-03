import React, { useContext } from 'react';
import "./Header.css";
import logo from "../../logos/Group 1329.png"
import { userContext } from '../../App';
const Header = () => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  return (
  
    <div className="container">
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light ">
      
      
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="50%" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 pr-5 ml-auto" >
            <li className="nav-item pr-4">
              <a className="nav-link"  href="#">Home</a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link" href="#">Donation</a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link" href="#">Event</a>
            </li>
            <li className="nav-item pr-4">
              <a className="nav-link" href="#">Blog</a>
            </li>         
          </ul>
          <button type="button" class="btn btn-primary m-3">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          
        </div>
        </nav>
      </div>
      
    
    </div>

  
  );
};

export default Header;