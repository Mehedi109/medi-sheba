import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto menu d-flex justify-content-evenly">
              <Nav.Link href="#/home">Home</Nav.Link>
              <Nav.Link href="#/home">About</Nav.Link>
              <Nav.Link href="#/home">Services</Nav.Link>
              <Nav.Link href="#/login">Login</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="Mehedi Alam">
                Mehedi Alam
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
