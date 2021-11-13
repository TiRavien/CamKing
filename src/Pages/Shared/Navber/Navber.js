import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navber = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CamKing</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explores">Explore</Nav.Link>
                        {user?.email ?
                            <Box>
                                <NavLink to="/dashboard">
                                    <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} style={{ textDecoration: 'none', color: 'white' }} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login">
                                <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Login</Button>
                            </NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;