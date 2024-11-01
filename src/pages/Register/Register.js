import React from 'react';
import './Register.css';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Register = () => {
    return (
        <section className='contact'>
            <form>
                <h2><span className='create'>Create a</span>W1NT3R Account</h2>
                <div className='input-box'>
                    <label>Username</label>
                    <input type='username' name='username' className='field' placeholder='Create username' required/>
                    <FaUserAstronaut className='icon'/>
                </div>
                <div className='input-box'>
                    <label>Password</label>
                    <input type='password' name='password' className='field' placeholder='Create password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label id='remember'><input type='checkbox'  />Remember me! </label>
                </div>
                <button type='submit'>Create Account</button>
            </form>
        </section>
    )
}

export default Register;