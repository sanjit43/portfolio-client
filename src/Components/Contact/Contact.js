import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div data-AOS="fade-up" className='mt-5' id='contact'>
            <h3 className='text-center'>Contact Me</h3>
            <form className='text-center' action="https://formsubmit.co/sanjitsarker257@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Email Yoooo" />
                <input className='m-2 w-50' type="text" name="name" placeholder='Enter your name' required />
                <input type="hidden" name="_next" value="http://localhost:3000/thanks" />
                <br />
                <input className='m-2 w-50' type="email" name="email" placeholder='Enter your email' required />
                <br />
                <textarea className='m-2 w-50' rows="5" cols="33" placeholder='Your Message'></textarea>
                <br />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default Contact;