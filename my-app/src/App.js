
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
import Author from './Component/Author/Author';
import SearchPage from './Pages/SearchPage/SearchPage';
import AuthProvider from './Hooks/AuthProvider';
import SignUp from './Component/SignUP/SignUp';
import SignIn from './Component/SignIn/SignIn';
import ForgotPass from './Component/ForgotPass/ForgotPass';
import CategoryDetails from './Component/CategoryDetails/CategoryDetails';
import PrivateRoute from './Hooks/PrivateRoute';














;

function App() {
  return (
    <AuthProvider>
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
          <Route path="/author">
            <Author></Author>
          </Route>
          <Route path='/search'>
            <SearchPage></SearchPage>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/forgotpass">
            <ForgotPass></ForgotPass>
          </Route>
          <PrivateRoute path="/cdetails">
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>

    </AuthProvider>
  );
}

export default App;
