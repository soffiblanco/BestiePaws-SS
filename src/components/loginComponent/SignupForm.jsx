import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type= "text" placeholder='first_name' required/>
                </div>
                <div className='input-box'>
                    <input type= "text" placeholder='last_name' required/>
                </div>
                <div className="input-box">
                    <input type= "text" placeholder='username' required/>
                </div>
                <div className="input-box">
                    <input type= "password" placeholder='password' required/>
                </div>
                <div className="input-box">
                    <input type= "password" placeholder='password' required/>
                </div>
                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
};

export default SignupForm;
