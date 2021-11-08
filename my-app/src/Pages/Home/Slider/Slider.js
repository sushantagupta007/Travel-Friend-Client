
import React from 'react';
import { Carousel } from 'react-bootstrap';

import b1 from '../../../Image/Background/b6.png'
import b2 from '../../../Image/Background/b7.jpg'
import b3 from '../../../Image/Background/b8.jpg'
import b4 from '../../../Image/Background/b9.jpg'

import './Slider.css'
const Slider = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:'420px'}}
      src={b1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={b2}
      style={{height:'420px'}}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={b3}
      alt="Third slide"
      style={{height:'420px'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={b4}
      alt="Third slide"
      style={{height:'420px'}}
    />

    <Carousel.Caption>
      <h3>Forth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Slider;