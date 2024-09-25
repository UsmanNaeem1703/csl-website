import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './Events.css';

const eventsData = [
 
    {
        id: 1,
        title: "Annual Cybersecurity Conference",
        date: "October 15th, 2024",
        location: "Islamabad, Pakistan",
        description: "Join us for a day of networking and learning about the latest trends and threats in cybersecurity.",
        displayImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgraphicdesigneye.com%2Fnewsletter-design-service%2F&psig=AOvVaw1h4QPAw1i4QOjyM5tVsYWd&ust=1727351436213000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCEg9mD3ogDFQAAAAAdAAAAABAE",
        status: "Active"
    },
    {
        id: 2,
        title: "SIEM Workshop",
        date: "November 5th, 2024",
        location: "Karachi, Pakistan",
        description: "A hands-on workshop focused on the latest SIEM tools and technologies.",
        displayImage: "https://api.cyberspacelegion.com/img/event-654321.jpg",
        status: "Pending"
    },
    {
        id: 3,
        title: "Cybersecurity Webinar",
        date: "December 10th, 2024",
        location: "Online",
        description: "An interactive online webinar discussing the latest cybersecurity strategies.",
        displayImage: "https://api.cyberspacelegion.com/img/event-789012.jpg",
        status: "Active"
    },
    {
        id: 4,
        title: "Threat Hunting Seminar",
        date: "January 20th, 2025",
        location: "Lahore, Pakistan",
        description: "Learn advanced threat hunting techniques from industry experts.",
        displayImage: "https://api.cyberspacelegion.com/img/event-345678.jpg",
        status: "Active"
    },
    {
        id: 5,
        title: "AI in Cybersecurity Conference",
        date: "February 15th, 2025",
        location: "Islamabad, Pakistan",
        description: "Explore how AI is transforming cybersecurity and what it means for the future.",
        displayImage: "https://api.cyberspacelegion.com/img/event-901234.jpg",
        status: "Pending"
    },
    {
        id: 6,
        title: "Digital Forensics Workshop",
        date: "March 10th, 2025",
        location: "Peshawar, Pakistan",
        description: "A workshop dedicated to the latest in digital forensics techniques.",
        displayImage: "https://api.cyberspacelegion.com/img/event-567890.jpg",
        status: "Active"
    },
    {
        id: 7,
        title: "Blockchain Security Summit",
        date: "April 25th, 2025",
        location: "Islamabad, Pakistan",
        description: "Discuss the implications of blockchain technology in cybersecurity.",
        displayImage: "https://api.cyberspacelegion.com/img/event-112233.jpg",
        status: "Pending"
    },
    {
        id: 8,
        title: "Penetration Testing Bootcamp",
        date: "May 8th, 2025",
        location: "Karachi, Pakistan",
        description: "A bootcamp focused on penetration testing methodologies and tools.",
        displayImage: "https://api.cyberspacelegion.com/img/event-445566.jpg",
        status: "Active"
    },
    {
        id: 9,
        title: "Incident Response Planning Workshop",
        date: "June 12th, 2025",
        location: "Lahore, Pakistan",
        description: "Hands-on workshop on building effective incident response plans.",
        displayImage: "https://api.cyberspacelegion.com/img/event-778899.jpg",
        status: "Pending"
    },
    {
        id: 10,
        title: "Data Privacy Day",
        date: "July 20th, 2025",
        location: "Peshawar, Pakistan",
        description: "A seminar focusing on the importance of data privacy in today's digital world.",
        displayImage: "https://api.cyberspacelegion.com/img/event-223344.jpg",
        status: "Active"
    },
    {
        id: 11,
        title: "Cloud Security Conference",
        date: "August 15th, 2025",
        location: "Islamabad, Pakistan",
        description: "Explore the latest trends and challenges in securing cloud environments.",
        displayImage: "https://api.cyberspacelegion.com/img/event-556677.jpg",
        status: "Pending"
    }
];

function Events() {
    return (
        <div className="events-page">
            <Container>
                <h1 className='mt-4'>Upcoming Events</h1>
                <p>Stay updated with the latest events and workshops.</p>

                <Accordion defaultActiveKey="none">
                    {eventsData.map((event, index) => (
                        <Accordion.Item eventKey={index.toString()} key={event.id}>
                            <Accordion.Header>{event.title}</Accordion.Header>
                            <Accordion.Body>
                                <div className="event-content">
                                    {/* Countdown */}
                                    <div className="countdown">
                                        <h3>Countdown to Event</h3>
                                        <p>{event.date}</p>
                                    </div>

                                    {/* Event Details */}
                                    <div className="event-details">
                                        <div className="venue-description">
                                            <h4>Venue: {event.location}</h4>
                                            <p>{event.description}</p>
                                        </div>
                                        <div className="event-image">
                                            <img src={event.displayImage} alt={event.title} />
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
}

export default Events;
