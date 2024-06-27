
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Header.css'; 

const Header = () => {
  return (
    <Navbar bg="light" className="custom-navbar py-1 ">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/Logomark.png`}
            width="70"
            height="70"
            className="d-inline-block align-top mr-2"
            alt="Logo"
          />
          <span style={{fontSize: '30px', fontWeight: 'bold'}}>Untitled UI</span>
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
          <NavDropdown title="Products" id="products-dropdown" className="mx-3">
            
          </NavDropdown>
          <NavDropdown title="Resources" id="resources-dropdown" className="mx-3">
            
          </NavDropdown>
          <Nav.Link href="#pricing" className="mx-3">Pricing</Nav.Link>
        </Nav>
        <img
          src={`${process.env.PUBLIC_URL}/Dropdown.png`}
          width="50"
          height="50"
          className="d-inline-block align-top mr-2"
          alt="Dropdown"
        />
      </Container>
    </Navbar>
  );
};

export default Header;
