import * as firebase from "firebase/app";
import "firebase/auth";
import {firebaseConfig} from './Firebase.config' ;

export const initializeLoginFramework=() => {

  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
  }
  
};


export const handleGoogleSignIn=()=>{
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
  .then(res=>{
    const {displayName, photoURL , email}=res.user
    const signedInUser={
      isSignedIn:true,
      name:displayName,
      email:email,     
      photo:photoURL,
      success:true
    }

    return signedInUser
    
  })
  .catch(err=>{
    console.log(err.error)
    console.log(err.Message)
  })

}


export const handleSignOut=()=>{
  return firebase.auth().signOut()
  .then(res=>{
    
    const signedOutUser={
      isSignedIn:false,
      name:"",
      email:"",      
      photo:"",
      error:"",
      success:false
    }

    return signedOutUser
  })
  .catch(err=>{

  })

}