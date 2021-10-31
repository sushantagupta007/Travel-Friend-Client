import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
// import ServiceCard from './../ServiceCard/ServiceCard';
import './Header.css'
import {Link,NavLink} from 'react-router-dom'
import useAuth from './../../Hooks/useAuth';
const Header = () => {
    const {user,googleLogOut} = useAuth(); 
    return (
        <Navbar bg="" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Travel Friend</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100  d-flex align-items-center">
                <NavLink as ={Link} className="me-4" to="/home">Home</NavLink>
                <NavLink as={Link} className="me-4" to="/Services">Services</NavLink>
                <NavLink as={Link} className="me-4" to="/TourPackage">Tour Package</NavLink>
                {user.email? <NavLink as={Link} className="me-4" to="/Myorder">My Order</NavLink>: ""}
                
                <NavLink as={Link} className="me-4" to="/Blog">Blog</NavLink>
                <NavLink as={Link} className="me-4" to="/Manageorder">Manage Order </NavLink>
                {user.email? <NavLink to="/Myorder">Mr {user.displayName} </NavLink> :""}
                {user.email? 
                    <button onClick={googleLogOut}className="btn btn-secondary"> Logout</button> :
                    <NavLink as={Link} to="/Login"> Login </NavLink> 
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>




      
    );
};

export default Header; 