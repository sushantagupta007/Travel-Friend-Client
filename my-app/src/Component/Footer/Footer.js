import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            
                <Container fluid className="bg-dark text-white">
                    <Row className="mt-3">
                        <Col className="d-flex flex-column p-4" lg ={4} sm={4}>
                            <h4> Travel Friend</h4>
                            <p className="text-info">
                            Travelfriend is designed for people who don't like to travel alone. ... Join our community and meet successful people from all over the ...
                            </p>
                        </Col>
                        <Col className="d-flex flex-column p-4" lg ={4} sm={4}>
                            <h4> Quick Links</h4>
                                <Link to="/Home"> Home</Link>
                                <Link to="/Services"> Services</Link>
                                <Link to="/Blog"> Blog</Link>
                                <Link to="/Registraion"> Registraion</Link>
                                <Link to="/Events"> Events</Link>

                                <a href="https://www.wikipedia.org/"> Important Links</a>
                        </Col>
                        <Col className="d-flex flex-column p-4 justify-content-evenly align-items-center" lg ={4} sm={4}>
                            <h4> Contact</h4>
                            
                            <div className="text-info d-flex flex-column">
                                <i className="fas fa-map-marker-alt"> </i> Address: 34, Gulshan Avenue, Dhaka-1212
                                <i className="fas fa-envelope"></i> Email: unitedHopital@gmail.com
                            </div>
                            <div className="d-flex w-50 "> 
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}> 
                                        <a href="https://www.facebook.com/"> <i className="fab fa-facebook"></i> </a>
                                    </Col>
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}>  
                                        <a href="https://twitter.com/?lang=en"> <i className="fab fa-twitter"></i> </a>
                                    </Col>
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}>   
                                        <a href="https://www.linkedin.com/signup"> <i className="fab fa-linkedin"></i> </a>
                                    </Col>
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}>  
                                        <a href="https://www.linkedin.com/signup"> <i className="fab fa-instagram"></i> </a>
                                    </Col>
                            </div>
                        </Col>
                    </Row>
                    <Row className="border text-center">
                        <p>CopyRight@travelfriend</p>
                    </Row>
                </Container>
            
        );
    }
}

export default Footer;