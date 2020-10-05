import React, { createContext, useState } from 'react';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import Dashboard from './Components/Dashboard/Dashboard';
import Admin from './Components/Admin/Admin';
// import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
export const userContext=createContext()


function App() {
  const [loggedInuser, setloggedInUser]=useState({})
  
  

  return (
    <userContext.Provider value={[loggedInuser, setloggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <PrivateRouter path="/dashboard" >
            <Dashboard/>
          </PrivateRouter>

          <PrivateRouter path="/register/:eventsKey">
            <Register/>
          </PrivateRouter>

          <Route exact path="/">
            <Home/>
          </Route>

          <PrivateRouter exact path="/admin">
            <Admin/>
          </PrivateRouter>

          

          <Route path="*">
            <h1>Not Found "404"</h1>
          </Route>
        </Switch>
      </Router>

    </userContext.Provider>
   
  );
}

export default App;
