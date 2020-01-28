import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import './Jumbo.css';

// import { Container } from './styles';

export default function Jumbo () {
  return (
 
    <Jumbotron className= 'JumboCor'>
  <h1> Bem Vindo a Cadeiras Cars !!!</h1>
  <p>
    Solucionamos qualquer Problema na Sua cadeira .<br/>
    Até nas suas Rodinhas!!!
      </p>
  <p>
    <Button variant="primary">Ler Mais</Button>
  </p>
</Jumbotron>

  );
}