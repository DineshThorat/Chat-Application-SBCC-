import React from 'react';
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../assets/logo3.png"

function Navigation() {
  return (
    <Navbar bg='light' expand="lg" style={{background: 'rgba(167, 131, 190, 0.856)'}}>
    <Container>
    <LinkContainer to="/">
      <Navbar.Brand>
        <img src={logo} alt='' style={{width: 70, height: 60}} />
      </Navbar.Brand>
    </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/chat">
            <Nav.Link>Chat</Nav.Link>
          </LinkContainer>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navigation;
