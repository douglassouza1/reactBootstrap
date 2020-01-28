import React from 'react';
import {Button, Nav, Navbar,Form,FormControl} from 'react-bootstrap';
// import { Container } from './styles';

export default function  Menu () {
  return (
    <>
  
  
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Cadeiras</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing">Modelos</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Digite sua Pesquisa" className="mr-sm-2" />
      <Button variant="outline-light">Pesquisar</Button>
    </Form>
  </Navbar>

  </>
  
  );
}