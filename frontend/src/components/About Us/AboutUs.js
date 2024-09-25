import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css'; // Import the updated CSS

function AboutUs() {
    return (
        <div className="about-section">
            <Container className="about-content">
                <div className="section-box">
                    <h2>Vision</h2>
                    <p>
                        CSL has a vision to develop and polish skills in students to help them become a good Cyber Security Analyst and Professional, fulfilling the demands of industry and help them evolve as a revolution in the world of Cyber Security. With the regular course load, CSL will be implementing the theoretical knowledge in a practical way.
                    </p>
                </div>
                <div className="section-box">
                    <h2>Mission</h2>
                    <p>
                        CSL has a vision to develop the required skill set in its members that will be helpful for them to evolve as a good Cyber Security Analyst and Professional. CSL takes the responsibility of developing the required Cyber related skills through Training Sessions, Workshops, Seminars, CTF like Competitions. CSL also aims at providing different Internship and Job opportunities to its members by collaborating with different well-reputed organizations in the IT Industry.
                    </p>
                </div>
                <div className="section-box">
                    <h2>Aims and Objectives</h2>
                    <ul>
                        <li>To raise awareness among students and the general public about the need and importance of Cyber Security.</li>
                        <li>To conduct training sessions of the Defensive and Offensive side of Cyber security Domain (by students).</li>
                        <li>To prepare students for different competitions at National and International level, representing FAST.</li>
                        <li>To conduct training and awareness sessions for Cyber as well as Non-Cyber Students, so that they can excel in this Domain.</li>
                        <li>To invite trainees, external speakers and cyber experts to conduct sessions on Cyber Security Challenges and innovations in respective domain.</li>
                        <li>To arrange tours to some IT infrastructure so that students can have an actual demonstration of security systems and their working.</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default AboutUs;
