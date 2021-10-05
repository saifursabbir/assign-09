import React from 'react';
import contact from './Contact.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import About from '../About/About';
const Contact = () => {
    return (
        <div>
            <div className="primary">
                <Container>
                    <Row>
                        <div className="contact-title m-5 p-3">
                            <h1>How Can We Help?</h1>
                            <p>Talk to one of our consultants today and learn how to start leveraging your Study.</p>
                        </div>
                        <Col>
                            <div className="home-title p-5 m-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title><p className="phone text-center p-3">+1 123 98765 4321</p></Card.Title>
                                        <Card.Text>
                                            <p className="phone text-center">We answer by phone from Monday to Saturday from 10 am until 6 pm.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div className="home-title p-5 m-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title><p className="phone text-center p-3">hello@business.com</p></Card.Title>
                                        <Card.Text>
                                            <p className="phone text-center">We will respond to your email within 8 hours on supped days.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div className="home-title p-5 m-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title><p className="phone text-center p-3">Office Street, 123</p></Card.Title>
                                        <Card.Text>
                                            <p className="phone text-center">Come visit us from Monday to Friday from 11 am to 4 pm.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;