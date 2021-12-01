import React from 'react';
import picture from '../../images/about.jpg'
import Header from '../Header/Header';

const About = () => {
    return (
        <div className='mt-5 container bg-primary p-3' id='about'>
            <h2 className='text-center mb-5'>About Me</h2>
            <div className='row'>
                <div className='col col-sm-12 col-md-12 col-lg-6'>
                    <img style={{ width: '350px' }} src={picture} alt=''></img>
                </div>
                <div className='col col-sm-12 col-md-12 col-lg-6'>
                    <h3>Sanjit Sarker [Full Stack Web Developer]</h3>
                    <p>I like to learn new skills and gain experience from it. My goal in life is to become a good programmer. All-time I am ready to use my programming skills to help boost my company's efficiency. Basically, I am strong enough to HTML5, CSS3, Bootstrap, Tailwind CSS, Material-UI, React.js, Node.js, MongoDB, and Firebase. I am improving myself by gaining skills in new technology.</p>
                    <a className='fs-5 fw-bold text-white' href="mailto: sanjitsarker257@gmail.com">Send Email</a>
                </div>
            </div>

        </div>
    );
};

export default About;