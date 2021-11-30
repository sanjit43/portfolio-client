import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/icon.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'> <img src={logo} alt=''></img> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-white fs-5 fw-bold m-2' to="/home">Home</Link>
                        <Link className='text-decoration-none text-white fs-5 fw-bold m-2' to='/work'>Work History</Link>
                        <Link className='text-decoration-none text-white fs-5 fw-bold m-2' to='/about'>About Me</Link>
                        <Link className='text-decoration-none text-white fs-5 fw-bold m-2' to='/contact'>Contact Me</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;