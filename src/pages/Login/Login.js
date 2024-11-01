import React from 'react';
import './Login.css';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Login = () => {
    return (
        <section className='contact'>
            <form>
                <h2>Login</h2>
                <div className='input-box'>
                    <label>Username</label>
                    <input type='username' name='username' className='field' placeholder='Enter your username' required/>
                    <FaUserAstronaut className='icon'/>
                </div>
                <div className='input-box'>
                    <label>Password</label>
                    <input type='password' name='password' className='field' placeholder='Enter your password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className='remember-forgot'>
                    <label id='remember'><input type='checkbox'/>Remember me! </label>
                    <a href='#'>Forgot Password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href='/register'>Register here!</a></p>
                </div>
            </form>
        </section>
    )
}

export default Login;