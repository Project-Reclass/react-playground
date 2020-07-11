import React from 'react';
import './src/nav.css'
import {Nav, Navbar, Button} from 'react-bootstrap';
// rename this to navbar component

function navBar() {
    return (
        <div>
            <header>
                <Navbar expand="lg" class="d-flex flex-column flex-md-row align-items-center px-3 pt-2 px-md-4 mb-3 bg-white border-bottom shadow-sm" fixed="top">
                <Navbar.Brand href="#home">
                    <img src="https://picsum.photos/30"/> Reclass
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Button variant="link">Sign In</Button>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <img src="https://picsum.photos/500/1500" alt='test'/>
            </header>
        </div>
    );
}

export default navBar