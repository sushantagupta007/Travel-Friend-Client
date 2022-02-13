import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from './useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoute = ({children,...rest}) => {
    let {user,loading} = useAuth();
    if(loading){
      return   <CircularProgress />
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
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;