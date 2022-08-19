import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/#/">KPIs Energy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/Mp6">Mp6</Nav.Link>
            <Nav.Link href="/#/Mp7">Mp7</Nav.Link>
            <Nav.Link href="/#/EE">Electrical Energy</Nav.Link>
            <Nav.Link href="/#/Gas">Gas Energy</Nav.Link>
            <Nav.Link href="/#/Costs">Costs</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;