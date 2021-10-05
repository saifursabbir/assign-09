import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import home from './Home.css'
import img1 from '../img/undraw_Before_dawn_re_hp4m.svg';
const Home = () => {
    return (
        <div className="primary">
            <Container>
                <Row>
                    <Col>
                        <div className="home-title p-5 m-3">
                            <p className="sub-title">EXCLUSIVE ACCESS</p>
                            <h1>Unlimited Transactions <br /> with zero fees</h1>
                            <p><small>Get access to our exclusive dilamond card that allows you to send unlimited transactions without getting charged any fees</small></p>
                            <Button className="" variant="primary">Get Started</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img className="img-style" src={img1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Services></Services>
            <About></About>
            <Contact></Contact>
            <div className="footer-style">
                <Container>
                    <Row>
                        <div className="footer-title m-5 text-center">
                            <h4>Join our exclusive memebership to receive the latest news and trends</h4>
                            <p>You can unsubscribe at ant time.</p>
                            <Button variant="outline-secondary">subscribe</Button>
                        </div>
                        <Col>
                            <div className="foter text-center">
                                <h5>About Us</h5>
                                <p><small>-how it works</small></p>
                                <p><small>-Testimonilas</small></p>
                                <p><small>-Careers</small></p>
                                <p><small>-Terms of Service</small></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center foter">
                                <h5>Contact Us</h5>
                                <p><small>-Contact</small></p>
                                <p><small>-Support</small></p>
                                <p><small>-Destinations</small></p>
                                <p><small>-Sponsorshop</small></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center foter">
                                <h5>Social Media</h5>
                                <p><small>-Instragram</small></p>
                                <p><small>-Facebook</small></p>
                                <p><small>-Youtube</small></p>
                                <p><small>-Twitter</small></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;