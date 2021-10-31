import React from 'react';
import {Spinner} from 'react-bootstrap'; 

import { Route,Redirect } from 'react-router-dom';

import useAuth from './../../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isloading} = useAuth(); 
    
    if(isloading){
        return <Spinner animation="border" role="status"> </Spinner>
    }
    return (
        <Route
            {...rest}
            render = {({location})=> user.email ? children :
            
            <Redirect
            to={{
                pathname: "/Login",
                state: { from: location }
              }}
            ></Redirect>}
        >
            
        </Route>
    );
};
  
export default PrivateRoute;