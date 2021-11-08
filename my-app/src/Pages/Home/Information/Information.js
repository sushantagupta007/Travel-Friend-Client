import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';


const Information = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h4 className="text-primary">Domestic Office</h4>
                </Col>
            </Row>
            <Row>
                
                <address className="border">
                    <h5> Bangladesh </h5> 
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>  <br/> 
                    Schanzenstrasse 7  <br/>
                    3030 BERNE  <br/>
                    SWITZERLAND <br/> 
                    <a href="_blank"> For Details </a>
                </address>
                
            </Row>
            <Row>
                <h4 className="text-primary">Foreign Offices</h4>
                <address className="border">
                    <h5> Europe Office </h5> 
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>  <br/> 
                    M. Andre Perret <br/>
                    Schanzenstrasse 7  <br/>
                    3030 BERNE  <br/>
                    SWITZERLAND <br/> 
                    <a href="_blank"> For Details </a>
                </address>
                <address className="border">
                    <h5> UK Office </h5> 
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>  <br/> 
                    M. Andre Perret <br/>
                    Schanzenstrasse 7  <br/>
                    3030 BERNE  <br/>
                    SWITZERLAND <br/> 
                    <a href="_blank"> For Details </a>
                </address>
                <address className="border">
                    <h5> Canada </h5> 
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>  <br/> 
                    M. Andre Perret <br/>
                    Schanzenstrasse 7  <br/>
                    3030 BERNE  <br/>
                    SWITZERLAND <br/> 
                    <a href="_blank"> For Details </a>
                </address>
                <address className="border">
                    <h5> India </h5> 
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>  <br/> 
                    Schanzenstrasse 7  <br/>
                    3030 BERNE  <br/>
                    SWITZERLAND <br/> 
                    <a href="_blank"> For Details </a>
                </address>
            </Row>
        </Container>
    );
};

export default Information;