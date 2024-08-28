import React, { useState } from "react";
import "./Header.css";
import logo from "./images/csl-logo.png"
import { Container, Navbar, Nav, Button, Form, NavDropdown } from "react-bootstrap";

const Header = (props) => {
  return (
    <div>
      {/* Main Header Navbar */}
      <Navbar className="main-header">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="header-logo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="menu-right">
            <Nav className="ml-auto align-items-center">
              <Form inline className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 customInput"
                />
                <Button type="submit" className="header-button ml-2">Submit</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Lower Header Navbar */}
      <Navbar expand="lg" expanded={props.expanded} className="lower-header mb-1">
        <Container className="d-flex justify-content-end">
          <button
            className="d-lg-none"
            style={{ border: "none", backgroundColor: "transparent" }}
            type="button"
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation"
          >
            <label className="hamburger">
              <input type="checkbox" checked={props.expanded} onClick={() => { props.handleToggle(!props.expanded); }} />
              <svg viewBox="0 0 32 32" >
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </button>
          <Navbar.Collapse id="lower-navbar-nav" className="menu-right">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/newsletter">Newsletter</Nav.Link>
              <NavDropdown title="Our Team" id="basic-nav-dropdown">
                <NavDropdown.Item href="/mentors">Mentors</NavDropdown.Item>
                <NavDropdown.Item href="/leadership">Leaders</NavDropdown.Item>
                <NavDropdown.Item href="/exectives">Exectives</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/playbooks">Playbooks</Nav.Link>

              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};

export default Header;
