import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container bg-dark mt-5 text-center'>
            <h2 className='text-white'>Follow Me</h2>
            <a href='https://github.com/sanjit43/'><i className="fab fa-github text-light"></i></a>
            <a className='m-3' href='https://www.linkedin.com/in/sanjit-sarker-66848996/'><i className="fab fa-linkedin text-light"></i></a>
            <div>
                <Link className='text-decoration-none text-primary fs-6 m-2' to="/home">Home</Link>
                <Link className='text-decoration-none text-primary fs-6 m-2' to='/work'>Work History</Link>
                <Link className='text-decoration-none text-primary fs-6 m-2' to='/about'>About Me</Link>
            </div>
        </div>
    );
};

export default Footer;