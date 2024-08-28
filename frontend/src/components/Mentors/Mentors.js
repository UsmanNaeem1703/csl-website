import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import mentor1 from "./images/abdullah.png"
import mentor2 from "./images/mehmood.png"

function Mentors() {
    return (
        <div>
            <Container>
                <Row className="mb-5 align-items-center">
                    <Col md={6} className="order-md-1">
                        <div className="view-image text-center">
                            <img src={mentor1} alt="Mentor" className="rounded-circle img-fluid" />
                            <h3 className="mt-3">Mentor's Message</h3>
                        </div>
                    </Col>
                    <Col md={6} className="order-md-2">
                        <div className="vice-president-view p-4">
                            <h3 className="quotation-primary mt-4">“</h3>
                            <p className="text-justify">As a mentor at CSL, I am deeply impressed by the enthusiasm and dedication our members show towards mastering the complexities of network security and cryptography. CSL provides an exceptional platform for students to apply theoretical knowledge to real-world challenges, fostering a culture of innovation and resilience in cybersecurity.</p>
                            <h3 className="text-right quotation-primary">”</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5 align-items-center">
                    <Col md={6}>
                        <div className="president-view p-4">
                            <h3 className="quotation-primary mt-4">“</h3>
                            <p className="text-justify">CSL is an invaluable initiative that equips students with hands-on experience in digital forensics and ethical hacking. I am honored to mentor such a passionate group, guiding them as they navigate the challenges of safeguarding digital spaces and upholding ethical standards in cybersecurity.</p>
                            <h3 className="text-right quotation-primary">”</h3>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="view-image text-center">
                            <img src={mentor2} alt="Mentor" className="rounded-circle img-fluid" />
                            <h3 className="mt-3">Mentor's Message</h3>
                        </div>
                    </Col>
                </Row>
                {/* <Row className="mb-5 align-items-center">
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
                </Row> */}
            </Container>
        </div>
    )
}

export default Mentors