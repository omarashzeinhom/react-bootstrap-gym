import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//scss file 

import './NavigationBar.scss';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="bottom"  collapseOnSelect> 
    <Container>
      <Navbar.Brand href="#home">
        <img
        alt="nav-logo"
        width="70"
        heigth="70"
        src='https://res.cloudinary.com/du9aympvd/image/upload/v1660838999/code/js/companyportfolio/StrongGym-logos_70x70_ggh4dd.webp'
        className='app__nav-logo'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
<Navbar.Collapse>
  <Nav>
    <Nav.Link href="#home" className="app__nav-link">Home</Nav.Link>
    <Nav.Link href="#about" className="app__nav-link">About</Nav.Link>
    <Nav.Link href="#services" className="app__nav-link">Services</Nav.Link>
    <Nav.Link href="#contact" className="app__nav-link">Contact</Nav.Link>

  </Nav>
</Navbar.Collapse>
    </Container>

      </Navbar>
  )
}

export default NavigationBar;