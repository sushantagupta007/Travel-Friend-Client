
import './App.css';




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import Map from './Component/Map/Map';













;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Map></Map>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
