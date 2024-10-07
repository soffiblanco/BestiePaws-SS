
import React, { useState } from 'react';
import './LoginForm.css';
import {FaUser, FaLock} from "react-icons/fa";

const LoginForm = () => {

const [isLoginActive, setIsLoginActive] = useState(true);

    return(
        <><div className={`wrapper${isLoginActive ? 'login-active' : 'register-active'}`}>
           {isLoginActive ? ( 
            <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='username' required />
                    <FaUser className='icon ' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' required />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={() => setIsLoginActive(false)}>Register</a></p>
                </div>
            </form>
            </div>
        ):(
        
        <div className='form-box register'>
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder='email' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="input-box">
                        <input type= "text" placeholder='username' required/>
                        <FaUser className='icon '/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                    </div>

                    <button type="submit">register</button>

                    <div className="register-link">
                        <p>Already hae an account? <a href="#" onClick={()=>setIsLoginActive(true)}>Login</a></p>
                    </div>
                </form>
            </div>
            )}
            </div>
            </>
    );
};

export default LoginForm;
