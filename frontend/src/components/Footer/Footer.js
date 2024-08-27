import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col md={7} className='flex-start'>
            <p class="highlight-text">After all, <span>it's all the <strong>privacy</strong> that matters</span>.</p>
          </Col>
          <Col md={2} style={{ textAlign: "right" }}>
            <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/newsletter">Newsletter</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={3} style={{ textAlign: "right" }}>
            <Nav>
              <NavItem>
                <NavLink href="/about-us">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact-us">Contact us</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <p>© 2024 CSL • All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;