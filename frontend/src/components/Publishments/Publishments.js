import React, { useState } from 'react';
import { Container, Button, Form, Modal, Card } from 'react-bootstrap';
import './Publishments.css';
const blogData = [
    {
        id: 1,
        title: "The Future of AI in Cybersecurity",
        description: "This blog explores the role AI is playing in advancing the security landscape...",
        status: "Published",
    },
    {
        id: 2,
        title: "Mitigating Insider Threats with SIEM",
        description: "Insider threats are often difficult to detect. In this blog, we discuss how SIEM tools...",
        status: "Draft",
    },
    {
        id: 3,
        title: "How to Enhance Network Security",
        description: "Effective network security strategies are critical to prevent breaches...",
        status: "Published",
    },
    {
        id: 4,
        title: "Best Practices for Data Encryption",
        description: "Learn about the best practices for encrypting sensitive data to secure your systems...",
        status: "Published",
    },
    {
        id: 5,
        title: "Zero Trust Architecture Explained",
        description: "In this blog, we delve into Zero Trust architecture and how it strengthens cybersecurity...",
        status: "Published",
    },
    {
        id: 6,
        title: "Endpoint Security Essentials",
        description: "Endpoints are vulnerable to attacks. Learn essential tips to secure your endpoints...",
        status: "Draft",
    },
    {
        id: 7,
        title: "Cloud Security in Modern Enterprises",
        description: "With enterprises moving to the cloud, it is crucial to understand how to secure cloud infrastructure...",
        status: "Published",
    },
    {
        id: 8,
        title: "Incident Response Planning: A Step-by-Step Guide",
        description: "This blog provides a detailed guide to creating a solid incident response plan...",
        status: "Published",
    },
    {
        id: 9,
        title: "Cybersecurity Compliance for Small Businesses",
        description: "Small businesses are often targeted by cybercriminals. This blog covers compliance essentials...",
        status: "Draft",
    },
    {
        id: 10,
        title: "Threat Hunting with Machine Learning",
        description: "Explore how machine learning is revolutionizing threat hunting techniques...",
        status: "Published",
    }
];


function Publishments() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ title: '', content: '' });
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Blog Submitted:', formData);
        setShowModal(false);
    };

    return (
        <div className="publishments-page">
            <Container>
                <div className="header-section">
                    <h1>Blog Publishing Platform</h1>
                    <Button className="publish-btn" onClick={() => setShowModal(true)}>
                        Publish your blog
                    </Button>
                </div>

                <div className="content-section">
                    <div className="sidebar">
                        <Form onSubmit={handleSearch} className="search-form">
                            <Form.Control
                                type="text"
                                placeholder="Search blogs..."
                                className="search-bar"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button type="submit" className="search-btn">Search</Button>
                        </Form>

                        <div className="blog-list">
                            <h5>Blog Lists</h5>
                            {blogData.map(blog => (
                                <Card key={blog.id} className="blog-list-item">
                                    <Card.Body>
                                        <strong>{blog.title}</strong>
                                        <p>{blog.status}</p>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="blog-display">
                        <h5>Blogs</h5>
                        {blogData.map(blog => (
                            <Card key={blog.id} className="blog-card">
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>{blog.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Modal for publishing blog */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Publish a New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="blogTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter blog title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="blogContent" className="mt-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Write your blog content here..."
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-3 publish-btn">
                            Publish
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Publishments;
