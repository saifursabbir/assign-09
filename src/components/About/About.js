import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import about from './About.css';
const About = () => {
    return (
        <div className="primary">
            <Container>
                <Row>
                    <h1 className="about-style text-center">WELCOME TO LAVISH</h1>
                    <Col>
                        <div className="home-title p-3 m-5">
                            <h4 className="about-style">About Us</h4>
                            <p>There are countless online education marketplaces on the internet. And there’s us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.


                                And the reason is, we don’t give up. When a student commits to a course, we commit to the student. We are not going to sugar coat it - we will make you complete, come what may. You may not have given much thought to what you are signing up for, but we believe you are signing up for knowledge that is useful and complete. We are ridiculously committed to our students. Be it constant reminders, relentless masters or 24 x 7 online support - we will absolutely make sure that you run out of excuses to not complete the course.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="home-title p-3 m-5">
                            <h4 className="about-style">Our Vision</h4>
                            <p>To become the largest online learning ecosystem for continuing education, in partnership with corporates and academia.</p>
                            <h4 className="about-style">Our Mission</h4>
                            <p>To create an alternate platform for students who wish to continue and complete courses by attending live online courses, using a team of ridiculously committed educators who will stop at nothing to impart education, helped by a 24 x 7 support system. By deploying our world class team of industry experts, we aim to educate our learners with the skills they need to advance their professional life to the next level.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default About;