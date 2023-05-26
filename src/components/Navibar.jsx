import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import logo from '../assets/723logo-.png'
import { LoginNavComponent } from './LoginNavComponent'

//const setActive = ({isActive}) => isActive ? 'active-link' : '';  //if not .active class name for active NavLink

function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home" className="navbar-brand fw-bold">
            <img
              alt="Logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block"
            />{' '}
            X-Com: From the Ashes
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/news" className="nav-link">News</NavLink>
            <NavLink to="/features" className="nav-link">Features</NavLink>
          </Nav>
          <Nav>
            <Button variant="dark">Download</Button>
            <LoginNavComponent/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;