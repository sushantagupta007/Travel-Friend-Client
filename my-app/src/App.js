
import './App.css';




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




import HomePage from './Pages/HomePage/HomePage';

import Nav from './Component/Nav/Nav';


import AboutComp from './Pages/AboutMe/AboutMe';
import Contact from './Pages/Contact/Contact';
import Category from './Pages/Category/Category';
import Post from './Pages/Post/Post';














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
        <Route path="/about">
          <AboutComp></AboutComp>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path="/category">
          <Category></Category>
        </Route>
        <Route path="/blog">
          <Post></Post>
        </Route>
        
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>    
  );
}

export default App;
