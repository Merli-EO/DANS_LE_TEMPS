import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'

function NavScroll() {
  return (
    <Navbar  bg="#121212" variant="dark" expand="lg" className="nav-font">
      <Container fluid>
        <Navbar.Brand href="#">Dans Le Temps</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">Communeauté</Nav.Link>
            <NavDropdown title="Liens" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Nouveautés
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="Recherche"
              placeholder="....."
              className="me-2"
              aria-label="Recherche"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default class Header extends Component {
  render() {
    return (
      <NavScroll/>     
    )
  }
}
