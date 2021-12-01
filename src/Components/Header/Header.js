import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/icon.png'

const Header = () => {
    return (
        <div id='home'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'> <img src={logo} alt=''></img> </Navbar.Brand>
                    <Nav className="me-auto">
                        <a className='text-decoration-none text-white fs-5 fw-bold m-2' href="#home">Home</a>
                        <a className='text-decoration-none text-white fs-5 fw-bold m-2' href='#work'>Work History</a>
                        <a className='text-decoration-none text-white fs-5 fw-bold m-2' href='#about'>About Me</a>
                        <a className='text-decoration-none text-white fs-5 fw-bold m-2' href='#contact'>Contact Me</a>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;