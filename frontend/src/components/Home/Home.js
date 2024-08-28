import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Carousel, Row, Col } from 'react-bootstrap'
import carouselImage1 from "./images/image1.jpg"
import carouselImage2 from "./images/image8.jpg"
import carouselImage3 from "./images/image2.jpg"
import carouselImage4 from "./images/image3.jpg"
import carouselImage5 from "./images/image4.jpg"
import carouselImage6 from "./images/image5.jpg"
import carouselImage7 from "./images/image6.jpg"
import carouselImage8 from "./images/image7.jpg"
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
          <Carousel.Item>
            <img src={carouselImage8} alt="Getting Audience attention" />
          </Carousel.Item>
        </Carousel>
        <Row className="mb-5 align-items-center">
          <Col md={12} className="order-md-2">
            <div className="vice-president-view p-4">
              <h3 className="quotation-primary mt-4">“</h3>
              <p className="text-justify">CyberSpace Legion is a Campus-level Society at FAST National University of Computer and Emerging Sciences, Islamabad that aims at creating a playground where students can develop and enhance their skills relating to Cyber Security, irrespective of their department or field, in a learning and friendly environment.</p>
              <h3 className="text-right quotation-primary">”</h3>
            </div>
          </Col>
        </Row>

      </Container>
    </div >
  )
}

export default Home