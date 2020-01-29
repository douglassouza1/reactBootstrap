import React from 'react';
import {Carousel, } from 'react-bootstrap'
import cadeirarei from './Img/cadeirarei.jpg'
import cadeira from './Img/cadeira.png'
import cadeirasRodas from './Img/cadeirasRodas.jpg'


// import { Container } from './styles';

export default function Car() {
  return (
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={cadeirarei}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={cadeirasRodas}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src={cadeira}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}