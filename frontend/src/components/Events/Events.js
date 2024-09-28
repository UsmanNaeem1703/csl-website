import React, { useState } from 'react';
import { Container, Card, Button, Modal, Form } from 'react-bootstrap';
import './Events.css';

const eventsData = [
    {
        id: 1,
        title: "Annual Cybersecurity Conference",
        time: "2024-10-01T09:00:00+05:00",  // Example time: October 1, 2024, at 9:00 AM PKT
        location: "Islamabad, Pakistan",
        description: "Lorem ipsum dolor sit amet. Aut aliquam nulla aut cupiditate facere aut enim temporibus qui pariatur dolorum est neque esse qui consequatur iste. Eum repellendus officia ut impedit architecto ut labore aspernatur qui incidunt magnam qui velit aliquam? Hic consectetur earum sit fuga quasi non ullam veniam sed eaque dolores eos exercitationem ipsum eos nulla ratione aut dolorum quia. Id illum enim id itaque nihil non quas animi.",
        displayImage: "https://via.placeholder.com/300x200",  // Replace with actual images
        status: "Active"
    },
    {
        id: 2,
        title: "SIEM Workshop",
        time: "2024-11-15T14:00:00+05:00",  // Example time: November 15, 2024, at 2:00 PM PKT
        location: "Karachi, Pakistan",
        description: "Lorem ipsum dolor sit amet. Aut aliquam nulla aut cupiditate facere aut enim temporibus qui pariatur dolorum est neque esse qui consequatur iste. Eum repellendus officia ut impedit architecto ut labore aspernatur qui incidunt magnam qui velit aliquam? Hic consectetur earum sit fuga quasi non ullam veniam sed eaque dolores eos exercitationem ipsum eos nulla ratione aut dolorum quia. Id illum enim id itaque nihil non quas animi.",
        displayImage: "https://via.placeholder.com/300x200",  // Replace with actual images
        status: "Pending"
    },
    // Add more events here...
];


function Events() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showRegisterModal, setShowRegisterModal] = useState(false); // Register modal state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleClose = () => setShowModal(false);
    const handleShow = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleRegisterClose = () => setShowRegisterModal(false);
    const handleRegisterShow = () => setShowRegisterModal(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log("Form Submitted:", formData);
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
        handleRegisterClose();
    };

    return (
        <div className="events-page">
            <Container>
                <h1 className="heading">Upcoming Events</h1>
                <p className="para-color">Stay updated with the latest events and workshops.</p>

                <div className="events-grid">
                    {eventsData.map((event) => (
                        <div className="event-card-wrapper" key={event.id}>
                            <Card className="event-card">
                                <Card.Img variant="left" src={event.displayImage} alt={event.title} />
                                <Card.Body className='event-card-body'>
                                    <div className="event-details">
                                        <Card.Title><b>{event.title}</b></Card.Title>
                                        <Card.Text className="mb-0">
                                            <p className="d-inline-block mb-0">{new Date(event.time).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: '2-digit'
                                            })}</p>

                                            <p className="d-inline-block mb-0" style={{ float: "right" }}>PKT {new Date(event.time).toLocaleTimeString('en-US', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true,
                                                timeZone: 'Asia/Karachi'
                                            })}</p><br />
                                            <hr class="mt-1 mb-3" />
                                            <p className="text-justify">
                                                <strong>Venue:</strong> {event.location}<br />
                                                <p>{event.description.slice(0, 150)}...</p>
                                            </p>
                                        </Card.Text>
                                        <div className="event-buttons">
                                            <Button variant="primary" className="events-btn" onClick={handleRegisterShow}>Register</Button>
                                            <Button variant="secondary" className="events-btn" onClick={() => handleShow(event)}>Learn More</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Learn More Modal */}
            {selectedEvent && (
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedEvent.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Date:</strong> {selectedEvent.date}</p>
                        <p><strong>Location:</strong> {selectedEvent.location}</p>
                        <p>{selectedEvent.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )}

            {/* Register Modal */}
            <Modal show={showRegisterModal} onHide={handleRegisterClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register for Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your email"
                            />
                        </Form.Group>



                        <Button variant="primary" type="submit" className="mt-4">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleRegisterClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Events;
