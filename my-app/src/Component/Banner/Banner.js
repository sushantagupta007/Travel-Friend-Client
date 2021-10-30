import React from 'react';
import { Carousel } from 'react-bootstrap';
import b1 from '../../Image/Background/b1.jpg'; 
import b2 from '../../Image/Background/b2.jpg'; 
import b3 from '../../Image/Background/b3.jpg'; 
import b6 from '../../Image/Background/b6.png'; 


import './Banner.css'
const Banner = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={b6}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1 className="text-black fw-bold ">Travel with travel expert</h1>
            <p className="text-black fw-bolder">Our Travel Expert Makes You Feel</p>
            </Carousel.Caption>
        </Carousel.Item>   
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={b1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h1 className="text-white fw-bold">Feel the sunshine and sunset wit us</h1>
            <p className="text-white">Picture from Cox's Bazar</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={b2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1 className="text-black fw-bold">Enjoy moment in Niagra Fall</h1>
            <p className="text-black fw-bolder">Unable Swimming! No Problem. We can assist you</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export default Banner;