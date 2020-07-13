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
            </header>
            <div class="container">
                <img src="https://picsum.photos/500/1000" alt='test'/>
                <footer class="border-top">
                    <div class="row">
                        <div class="col">
                            <img src="https://picsum.photos/50/50" alt='footer-test'/>
                            <small class="d-block mb-3 text-muted"> &copy; 2020</small>
                        </div>
                        <h5>Links</h5>
                        <div class="col">
                            <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Our Team</a></li>
                            <li><a class="text-muted" href="#">Volunteer</a></li>
                            <li><a class="text-muted" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Reclass</a></li>
                            <li><a class="text-muted" href="#">About Us</a></li>
                            <li><a class="text-muted" href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default navBar