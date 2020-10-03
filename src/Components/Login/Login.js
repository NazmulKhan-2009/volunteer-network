import React, { useContext, useState } from 'react';
import "./Login.css";
import logo from "../../logos/Group 1329.png"
import { Link, useHistory, useLocation } from 'react-router-dom';

import { handleGoogleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';
import { userContext } from '../../App';

const Login = () => {
  const [newuser, setNewuser]=useState(false)
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  const history=useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser]=useState({
    email:"",
    password:"",
    name:"",
    photo:"",
    isSignedIn:false, 
    error:'',
    success:false
})

initializeLoginFramework();

const GoogleSignIn=()=>{
  handleGoogleSignIn()
      .then(res=>{
        handleResponse(res, true)
        

      })
  
}
const signOut=()=>{
  handleSignOut()
  .then(res=>{
    handleResponse(res, false)
   
  })
}

const handleResponse=(res, redirect)=>{
  setUser(res)
  setloggedInUser(res)
  if(redirect){
    history.replace(from);
  }
  
 }



  return (
    <div className='container nav_bg sign-in-wrapper'>
      <div className='row '>
      <Link className="navbar-brand text-center mt-5 mb-5" to="/home">
          <img src={logo} alt="" width="25%" />
        </Link>

        {/* signOut */}
        <div className="text-center">
      {
        newuser && <button onClick={signOut} className="btn btn-danger" >Sign Out</button>
      }
      
      </div>
        <div className='col-sm-12 col-md-6 mx-auto  my-form'>
        <h4
        style={newuser ? {marginTop:"0px"}:{marginTop:"120px"}}
        >{newuser ? "Create An Account":"Login In"}</h4>

        {newuser && 
            <form >
            {/* signup */}
             
            <label>
                <span>First Name</span>
                <input type="text" name="firstname" />
              </label>
            
            
              <label>
                <span>Last Name</span>
                <input type="text" name="lastname" />
              </label>
            
            

            {/* signup */}
            
              <label>
                <span>Email Address</span>
                <input type="email" name="email"  required/>
              </label>
            

              <label>
                <span>Password</span>
                <input type="password" name="password"  required/>
              </label>
            {/* signup */}
              <label>
                <span>Confirm Password</span>
                <input type="Password" name="retype"/>
              </label>
             {/* signup  */}
              
              {/* <button class="submit" type="button" >Sign In</button> */}
              <input type="submit" value="Submit" />
            </form>
            }
              
             
                
                <div className="social-btn" >
                  

                  <div className="google-btn" onClick={GoogleSignIn}>
                    <img src="https://i.imgur.com/P9ZVhek.png" alt="" width="40"/>
                    <span style={{fontSize:"20px"}}>Continue with Google</span>
                  </div>
                

                <p style={{textAlign:"center"}}>{newuser ? "Already have An Account ? ":"Don't Have account ?"  }<span onClick={()=>setNewuser(!newuser)} style={{color:"#3F90FC",cursor:"pointer"}}>{newuser? " Sign In" :" Create Account"}</span></p>
              </div> 
          </div>
        </div>
      </div>
  );
};

export default Login;

