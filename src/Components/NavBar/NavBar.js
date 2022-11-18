import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar() {
    return (
        <Navbar style={{backgroundColor:'red-dark'}} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='text-white'>GRUPO 08</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">
                            <Button className="btn btn-secondary btn-sm">Inicio</Button>
                        </Nav.Link>
                        <Nav.Link href="/peliculas">
                            <Button className="btn btn-secondary btn-sm">Peliculas</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;