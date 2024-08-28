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


      </Container>
    </div >
  )
}

export default Home