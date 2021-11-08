
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {

  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blog from './Pages/Blog/Blog';


import Navigation from './Pages/Home/Navigation/Navigation';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvide';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

import ManageMyorder from './Pages/ManageMyOrder/ManageMyOrder';

import Placeorder from './Pages/Placeorder/Placeorder';
import Addnewservice from './Pages/Addnewservice/Addnewservice';
import ManageAllorders from './Pages/ManageAllorders/ManageAllorders';

function App() {
  return (
<AuthProvider>
<Router>
    <Navigation></Navigation>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/services"> 
        <Services></Services>
      </Route>
      <PrivateRoute path="/manageallorders">
        <ManageAllorders></ManageAllorders>
      </PrivateRoute>
      <PrivateRoute path="/addnewservice">
        <Addnewservice></Addnewservice>
      </PrivateRoute>
      <PrivateRoute path="/managemyorder/">
        <ManageMyorder></ManageMyorder>
      </PrivateRoute>
      <PrivateRoute path="/placeorder">
        <Placeorder></Placeorder>
        </PrivateRoute>
      <PrivateRoute path="/placeorder/:_id">
        <Placeorder></Placeorder>
      </PrivateRoute>
      <Route path="/login"> 
        <Login></Login>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
</Router>
</AuthProvider>    
  
    
  );
}

export default App;
