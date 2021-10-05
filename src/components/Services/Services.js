import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';
import services from './Services.css';
const Services = () => {
    return (
        <div className="services-style">
            <div className="p-5">
                <Container>
                    <Row>
                        <h1 className="services-title text-center">Our Services</h1>
                        <h3 className="services-title p-5">Pricing</h3>
                        <Col><Card style={{ width: '18rem' }}>
                            <div className="card-style">
                                <Card.Body>
                                    <h3 className="text-center service-title">Starter</h3>
                                    <Card.Title><h1 className="text-center service-title">$8.99</h1></Card.Title>
                                    <Card.Subtitle className="mb-2 text-center service-title">per month</Card.Subtitle>
                                    <Card.Text>
                                        <p className="text-center service-title">100 Transactions<br />2% Cash Back<br />$10,000 Limit</p>
                                        <div className="text-center"> <Button className="" variant="danger" size="sm">Choose Plan</Button></div>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card></Col>
                        <Col><Card style={{ width: '18rem' }}>
                            <div className="card-style">
                                <Card.Body>
                                    <h3 className="text-center service-title">Gold</h3>
                                    <Card.Title><h1 className="text-center service-title">$22.99</h1></Card.Title>
                                    <Card.Subtitle className="mb-2 service-title text-center">per month</Card.Subtitle>
                                    <Card.Text>
                                        <p className="text-center service-title">1000 Transactions<br />3.5% Cash Back<br />$100,000 Limit</p>
                                    </Card.Text>
                                    <div className="sev-btn" >
                                        <div className="text-center"> <Button className="" variant="danger" size="sm">Choose Plan</Button></div>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card></Col>
                        <Col><Card style={{ width: '18rem' }}>
                            <div className="card-style">
                                <Card.Body>
                                    <h3 className="text-center service-title">Diamond</h3>
                                    <Card.Title><h1 className="text-center service-title">$99.99</h1></Card.Title>
                                    <Card.Subtitle className="mb-2 service-title text-center">per month</Card.Subtitle>
                                    <Card.Text>
                                        <p className="text-center service-title">Unlimited Transactions<br />5% Cash Back<br />Unlimited Limit</p>
                                        <div className="text-center"> <Button className="" variant="danger" size="sm">Choose Plan</Button></div>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card></Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Services;