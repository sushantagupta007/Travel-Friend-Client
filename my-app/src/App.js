
import './App.css';




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




import HomePage from './Pages/HomePage/HomePage';

import Nav from './Component/Nav/Nav';














;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <HomePage></HomePage>
        </Route>
        <Route path="/header">
          <Nav></Nav>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
