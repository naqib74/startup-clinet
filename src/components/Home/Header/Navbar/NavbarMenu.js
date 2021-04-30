import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../images/cover.png'

const NavbarMenu = () => {
  return (

    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img style={{ width: '170px', height: '80px' }} src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">ABOUT US</Nav.Link>
          <Nav.Link href="#link">BLOG</Nav.Link>
          <Nav.Link href="#link"> <Link to='/admin'>ADMIN</Link></Nav.Link>
          <Nav.Link href="#link">CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default NavbarMenu;