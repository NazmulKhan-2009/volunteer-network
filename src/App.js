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

          <PrivateRouter path="/register">
            <Register/>
          </PrivateRouter>

          <Route exact path="/">
            <Home/>
          </Route>

          <PrivateRouter path="/dashboard/:accessKey">
            <Dashboard/>
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
