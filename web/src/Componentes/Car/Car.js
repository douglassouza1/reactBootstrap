import React from 'react';
import {Carousel, } from 'react-bootstrap'
import cadeira from '../Img/cadeira.jpg'
import cadeiras from '../Img/cadeiras.jpg'
import cadeirasRodas from '../Img/cadeirasRodas.jpg'
import "./Car.css"


// import { Container } from './styles';

export default function Car() {
  return (
   <div className= "tamanho">  
   <Carousel >
  <Carousel.Item>
    <img
     className="d-block w-100"
    src={cadeira}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>MELHORES MODELOS</h3>
      <p>Os Melhores Modelos Você só encontra aqui !!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cadeirasRodas}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sua Sentada è o Nosso Conforto </h3>
      <p>Quanto mais Você senta mais felizes Ficamos .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cadeiras}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Este Sentou Muito</h3>
      <p>E foi a nossa Alegria</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> 
  );
}