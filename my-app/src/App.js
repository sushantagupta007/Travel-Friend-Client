
import './App.css';




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import CategoryBlock from './Component/Category/CategoryBlock';












;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
