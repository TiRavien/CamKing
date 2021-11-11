import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explores">Explore</Nav.Link>
                        <NavLink to="/login">
                            <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Login</Button>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;