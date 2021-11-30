import React from 'react';

const Contact = () => {
    return (
        <div className='mt-5'>
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