import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
  

} from "react-router-dom";

import Home from './Component/Shared/Home';
import Login from './Component/Login/Login';
import Myorder from './Component/Myorder/Myorder';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Services from './Component/Services/Services';
import Registration from './Component/Registration/Registration';
import Research from './Component/Research/Research';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/Services">
          <Services></Services>
         </Route> 
        <Route path="/Login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/Myorder">
          <Myorder></Myorder>
        </PrivateRoute>
       
        <Route path="/Registration">
          <Registration></Registration>
        </Route>
      </Switch>
    </BrowserRouter>
    </AuthProvider>
    
      
      
      
    
  );
}



export default App;
