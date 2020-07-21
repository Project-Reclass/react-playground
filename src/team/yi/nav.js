import React from 'react';
import './src/nav.css'
import {Nav, Navbar, Button} from 'react-bootstrap';
import logo from './src/logo.png'

function navBar() {
    return (
        <div>
            <header>
                <Navbar expand="lg" class="d-flex flex-column flex-md-row align-items-center px-3 pt-2 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <Navbar.Brand href="#home">
                    <img src={logo} class= "logo" alt="logo"/>
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
            </header>
        </div>
    );
}

export default navBar