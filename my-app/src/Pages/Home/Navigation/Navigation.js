
import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const Navigation = () => {
  const {user,googleSignOut} = useAuth(); 

  const handleSignout = ()=>{
    googleSignOut()
  }
  
  console.log(user)
    return (
<Navbar bg="" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Travel Friend</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className="me-3 p-2 text-black" to="/home">Home</NavLink>
        <NavLink className="me-3 p-2 text-black" to="/services">Services</NavLink>
        {user.email? <NavLink className="me-3 p-2 text-black" to="/placeorder">Place Order</NavLink>:" "}
        {user.email? <NavLink className="me-3 p-2 text-black" to="/managemyorder">My Order</NavLink>:" "}
        {user.email? <NavLink className="me-3 p-2 text-black" to="/addnewservice">Add New Service</NavLink>:""}
        {user.email? <NavLink className="me-3 p-2 text-black" to="/manageallorders">Manage Service</NavLink>:""}
        
        
        {user.email?  <div className="d-flex align-items-center fw-bold me-3"> Welcome Mr. {user.email}  </div> :""}
        {user.email? <button type="button" className="btn btn-danger" onClick={handleSignout}>Logout</button>:<NavLink className="me-3 p-2 text-black" to="/login">Login</NavLink>}
        
      </Nav>
    </Navbar.Collapse>
    {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button type="button" className="btn btn-danger" variant="outline-success">Search</Button>
      </Form> */}
  </Container>
</Navbar>
    );
};

export default Navigation;