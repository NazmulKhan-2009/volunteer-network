import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

function PrivateRouter({ children, ...rest }) {
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInuser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRouter;