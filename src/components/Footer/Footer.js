import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="footer-style">
                <Container>
                    <Row>
                        <div className="footer-title m-5 p-3 text-center">
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
            {/* <Container>
               <Row>
                   <col>

                   </col>
               </Row>
           </Container> */}
        </div>
    );
};

export default Footer;