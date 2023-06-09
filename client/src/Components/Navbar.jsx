import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Salesine</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>HOME</Link></Nav.Link>
          <Nav.Link><Link to="calls" style={{ textDecoration: "none", color: "inherit" }}>CALLS</Link></Nav.Link>
          <Nav.Link herf="#action1">DEALS</Nav.Link>
          <Nav.Link herf="#action1">TEAMS</Nav.Link>
          <Nav.Link herf="#action1">ACTIVITY</Nav.Link>
          <Nav.Link herf="#action1">LIBRARY</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <div className="bdiv">
        <Link
            to="signup"
            style={{ textDecoration: "none", color: "inherit" }}
          ><Button variant="inherit">Sign Up</Button>
          </Link>
        
          <Link
            to="login"
            style={{ textDecoration: "none", color: "inherit" }}
          ><Button variant="inherit">Login</Button>
          </Link>
          </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
