import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import './Home.css';

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
    setModalShow(false); // Close the modal after submission
  };

  return (
    <div className={`home-main ${modalShow ? 'blur' : ''}`}>
      <div className="hero-section">
        <Container className="text-center hero-content">
          <Row>
            <Col>
              <h1>Welcome to the world of cybersecurity</h1>
              <p>Check out our newsletter.</p>
              <Button onClick={() => setModalShow(true)} className="cta-button">Newsletter</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="features-section text-center mt-5">
        <Row className="features-cards">
          <Col md={4} className="feature-card">
            <p className="tip">Awareness</p>
            <p className="second-text">We look forward to spreading awareness about cybersecurity.</p>
          </Col>
          <Col md={4} className="feature-card">
            <p className="tip">Grow</p>
            <p className="second-text">Grow in the cybersecurity world with us.</p>
          </Col>
          <Col md={4} className="feature-card">
            <p className="tip">Compete</p>
            <p className="second-text">Compete with professionals from all around the world under cyberspace legion.</p>
          </Col>
        </Row>
      </Container>

      {/* Latest Event Section */}
      <Container fluid className="latest-event-section text-center mt-5">
        <Row>
          <Col>
            <h2>LATEST EVENT:</h2>
            <p>Join us for our annual cybersecurity conference on October 15th, 2024, in Islamabad. Network with industry professionals and learn about the latest trends and threats in the cybersecurity world.</p>
            <Button href="/events" className="cta-button">View All Events</Button>
          </Col>
        </Row>
      </Container>


      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="newsletter-modal">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Subscribe to Our Newsletter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-justify'>Stay updated on latest news regarding cybersecurity events in Pakistan. Subscribe to receive the latest news directly.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className='mb-4'>
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </Form.Group>
            <Button variant="primary" type="submit" className='cta-button mb-4'>
              Subscribe
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;
