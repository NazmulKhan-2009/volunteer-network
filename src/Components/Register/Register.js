import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from "../../logos/Group 1329.png"
const Register = () => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  return (
    <div className='container nav_bg sign-in-wrapper'>
      <div className='row '>
      <Link className="navbar-brand text-center mt-5 mb-5" to="/home">
          <img src={logo} alt="" width="25%" />
        </Link>
        <p style={{textAlign: 'center', color: 'red',fontWeight:"bold"}}>{loggedInuser.name}</p>
        <div className='col-sm-12 col-md-6 mx-auto  my-form'>
        <h4>Register As Volunteer</h4>

        
            <form >
            
             
            <label>
                <span>First Name</span>
                <input type="text" name="firstname" />
              </label>
            
            
              <label>
                <span>Last Name</span>
                <input type="text" name="lastname" />
              </label>
            
            

            
            
              <label>
                <span>Email Address</span>
                <input type="email" name="email"  required/>
              </label>
            

              <label>
                <span>Password</span>
                <input type="password" name="password"  required/>
              </label>
            
              <label>
                <span>Confirm Password</span>
                <input type="Password" name="retype"/>
              </label>
             
              
              
              <input type="submit" value="Registration"/>
            </form>
            
              
             
                
                
          </div>
        </div>
      </div>
  );
};

export default Register;