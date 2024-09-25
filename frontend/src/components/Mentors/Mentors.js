import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mentor1 from "./images/abdullah.png";
import mentor2 from "./images/mehmood.png";
import './Mentors.css'; // Import the updated CSS

function Mentors() {
    return (
        <div className="mentors-section">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <div className="mentor-box d-flex">
                            <div className="mentor-image-box">
                                <img src={mentor1} alt="Mentor" className="mentor-image" />
                            </div>
                            <div className="mentor-message-box">
                                <h3 className="mentor-title">Mentor's Message</h3>
                                <p className="mentor-quote">“</p>
                                <p className="mentor-message">As a mentor at CSL, I am deeply impressed by the enthusiasm and dedication our members show towards mastering the complexities of network security and cryptography. CSL provides an exceptional platform for students to apply theoretical knowledge to real-world challenges, fostering a culture of innovation and resilience in cybersecurity.</p>
                                <p className="mentor-quote-right">”</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <div className="mentor-box d-flex">
                            <div className="mentor-image-box">
                                <img src={mentor2} alt="Mentor" className="mentor-image" />
                            </div>
                            <div className="mentor-message-box">
                                <h3 className="mentor-title">Mentor's Message</h3>
                                <p className="mentor-quote">“</p>
                                <p className="mentor-message">CSL is an invaluable initiative that equips students with hands-on experience in digital forensics and ethical hacking. I am honored to mentor such a passionate group, guiding them as they navigate the challenges of safeguarding digital spaces and upholding ethical standards in cybersecurity.</p>
                                <p className="mentor-quote-right">”</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Mentors;
