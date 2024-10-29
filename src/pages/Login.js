import React from 'react';
import './Login.css';

const Contact = () => {
    return (
        <section className='contact'>
            <form>
                <h2>Sign In</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type='text' name='name' className='field' placeholder='Enter your name' required/>
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type='email' name='email' className='field' placeholder='Enter your email' required/>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    )
}

export default Contact;