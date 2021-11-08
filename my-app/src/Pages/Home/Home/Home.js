import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClientFeed from '../ClientFeedBack/ClientFeed';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
    
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Slider></Slider>
            <Container className="bg-light">
                <Row>
                    <Col lg={9} xs={12}>
                        <Services></Services>
                    </Col>
                    <Col lg={3} xs={12}>
                        <Information></Information>
                    </Col>
                </Row>
            </Container>
            <ClientFeed></ClientFeed>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;