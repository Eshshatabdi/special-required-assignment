import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbars = () => {
    const [user] = useAuthState(auth);
    const userSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="info " variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Physical Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link me-auto text-white text-decoration-none' onClick={userSignOut}>Sign out</button>
                                :
                                <Nav.Link as={Link} to='login'>
                                    login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;