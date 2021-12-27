
import './App.css';


import Navbar from './Component/Nav/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import PrimarySearchAppBar from './Component/Header/Header';
import Footer from './Component/Footer/Footer';



;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/nav">
          <Footer></Footer>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
