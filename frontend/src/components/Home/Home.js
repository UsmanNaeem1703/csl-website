import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Carousel, Row, Col } from 'react-bootstrap'
import carouselImage1 from "./images/image1.jpg"
import carouselImage2 from "./images/image2.jpg"
import carouselImage3 from "./images/image3.jpg"
import carouselImage4 from "./images/image4.jpg"
import carouselImage5 from "./images/image5.jpg"
import carouselImage6 from "./images/image6.jpg"
import carouselImage7 from "./images/image7.jpg"
import vicePresident from "./images/vice president.png"
import president from "./images/president.png"
import './Home.css'

function Home(props) {
  const navigate = useNavigate();

  return (
    <div className='home-main'>
      <Container>
        <Carousel className="home-carousel mb-4">
          <Carousel.Item>
            <img src={carouselImage1} alt="Getting Audience attention" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImage2} alt="Getting Audience attention" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImage3} alt="Getting Audience attention" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImage4} alt="Getting Audience attention" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImage5} alt="Getting Audience attention" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImage6} alt="Getting Audience attention" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carouselImage7} alt="Getting Audience attention" />
          </Carousel.Item>
        </Carousel>
        <Row className="mb-5 align-items-center">
          <Col md={6} className="order-md-1">
            <div className="view-image text-center">
              <img src={president} alt="President" className="rounded-circle img-fluid" />
              <h3 className="mt-3">President's Message</h3>
            </div>
          </Col>
          <Col md={6} className="order-md-2">
            <div className="vice-president-view p-4">
              <h3 className="quotation-primary mt-4">“</h3>
              <p className="text-justify">Welcome to the CyberSpace Legion! As president, I’m honored to lead our mission of spreading awareness and advancing knowledge in the field of cybersecurity. We’re dedicated to providing opportunities for learning through workshops, seminars, and collaborative projects. Our goal is not just to educate, but to inspire and engage our community in tackling real-world security challenges. Join us as we work together to make a significant impact and build a safer digital future.</p>
              <h3 className="text-right quotation-primary">”</h3>
            </div>
          </Col>
        </Row>
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <div className="president-view p-4">
              <h3 className="quotation-primary mt-4">“</h3>
              <p className="text-justify">With a three-year track record in ethical hacking and cybersecurity, Committed to continuous learning and ethical practices, I bring a detail-oriented approach to the ever-evolving field of cybersecurity.</p>

              <p className="text-justify">As Vice President of CyberSpace Legion (CSL), I’m dedicated to creating a space where students from all backgrounds can come together to explore and grow in cybersecurity. Our focus on privacy and ethical practices drives everything we do, and I’m excited to help lead a team that’s committed to making a real difference in this crucial field.</p>
              <h3 className="text-right quotation-primary">”</h3>
            </div>
          </Col>
          <Col md={6}>
            <div className="view-image text-center">
              <img src={vicePresident} alt="Vice President" className="rounded-circle img-fluid" />
              <h3 className="mt-3">Vice President's Message</h3>
            </div>
          </Col>
        </Row>

      </Container>
    </div >
  )
}

export default Home