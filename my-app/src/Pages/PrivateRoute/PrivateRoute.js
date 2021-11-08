import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,loading} = useAuth();
    if(loading){
      console.log("hlw")
      return <Spinner animation="border" role="status" />
      
    }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
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
};

export default PrivateRoute;