import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'


// import { Container } from './styles';

export default function Jumbo () {
  return (
    
    <Jumbotron>
  <h1> Bem Vindo a Cadeiras Cars !!!</h1>
  <p>
    Solucionamos qualquer Problema na Sua cadeira .
    Até nas suas Rodinhas!!!
      </p>
  <p>
    <Button variant="primary">Ler Mais</Button>
  </p>
</Jumbotron>
  );
}