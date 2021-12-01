import React, { useEffect } from 'react';
import image from '../../images/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='mt-5 container'>
            <div className='border border-4 border-info p-3 mb-5'>
                <h2 className='text-center'>Full-Stack Web Developer!</h2>
                <h3 className='text-muted text-center'>I design and code beautifully simple things, and I love to build SEO friendly website for you.</h3>
            </div>

            <div data-AOS="fade-up" className='m-5 p-3'>
                <div className='row'>
                    <div data-AOS="fade-right" className='col col-sm-12 col-md-12 col-lg-6'><img style={{ width: '400px' }} className='' src={image} alt=''></img></div>
                    <div data-AOS="fade-left" className='col col-sm-12 col-md-12 col-lg-6'>
                        <h3 className='mt-5 p-2'>I have completed some exceptional projects for my practice purpose. And it is fully responsive, custom designed.</h3>
                        <div>
                            <a href='https://drive.google.com/file/d/15dFszf080tVWY1HWkZxYCzUTb0RsnnFR/view?usp=sharing' target="_blank"><button type='button' className='btn btn-info text-center'>See My Resume</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;