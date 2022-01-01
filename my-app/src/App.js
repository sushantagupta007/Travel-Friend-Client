
import './App.css';


import Navbar from './Component/Nav/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import HomePage from './Pages/HomePage/HomePage';
import Explore from './Component/Explore/Explore';






;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Explore></Explore>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
