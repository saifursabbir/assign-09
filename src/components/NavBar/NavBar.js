import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import navbar from './NavBar.css'
const NavBar = () => {
    return (
        <div className="nav-menu">
            <Container>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><h1 className="Brand-Name">LAVISH</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2
                            my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Stack direction="horizontal" gap={5} className="m-3">
                                    <NavLink className="link-style"
                                        to="/home"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "tomato"
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink className="link-style"
                                        to="/services"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "tomato"
                                        }}
                                    >
                                        Services
                                    </NavLink>
                                    <NavLink className="link-style"
                                        to="/about"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "tomato"
                                        }}
                                    >
                                        About
                                    </NavLink>
                                    <NavLink className="link-style"
                                        to="/contact"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "tomato"
                                        }}
                                    >
                                        Contact
                                    </NavLink>
                                </Stack>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;