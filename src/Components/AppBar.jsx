import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";

const AppBar = () => {
  return (
    <div>
      <Navbar bg="warning" expand="md">
        <Container>
          <Navbar.Brand href="#home"><h2 className="text-danger"><span><i className="bi bi-yelp"></i>Pizza Shop</span></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" className="fw-bold mx-2">Home</Nav.Link>
              <Nav.Link href="#menu" className="fw-bold mx-2">Menu</Nav.Link>
              <Nav.Link href="#musttry" className="fw-bold mx-2">Must Try</Nav.Link>
              <Nav.Link href="#contact" className="fw-bold mx-2">Contact Us</Nav.Link>
              <Cart/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
