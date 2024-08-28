import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import vicePresident from "./images/vice president.png"
import president from "./images/president.png"

function Leadership() {
    return (
        <div>
            <Container>
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
        </div>
    )
}

export default Leadership