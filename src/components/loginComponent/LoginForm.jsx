
/* PRIMER CODIGO PRUEBA
import React, { useState } from 'react';
import axios from 'axios';
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
                        <input type="text" placeholder='name' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='email' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="input-box">
                        <input type= "text" placeholder='password' required/>
                        <FaUser className='icon '/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='image' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='direction' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='telephone number' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='card number' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='emexpiration date' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='cvv' required />
                        <FaUser className='icon ' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                    </div>
                    <div className="register-link">
                    <p>Already hae an account? <a href="#" onClick={() => setIsLoginActive(true)}>Login</a></p>
                </div>
                    <button type="submit">register</button>

                </form>
            </div>
            )}
            </div>
            </>
    );
};

export default LoginForm; */

/* SEGUNDO CODIGO PRUEBA
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        direction: '',
        telephoneNumber: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleToggle = () => {
        setIsLoginActive(!isLoginActive);
        console.log("Is login active:", !isLoginActive);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoginActive) {
            // Lógica de inicio de sesión
            try {
                const response = await axios.post('/api/login', {
                    email: formData.email,
                    password: formData.password,
                });
                console.log(response.data);
            } catch (error) {
                console.error('Login failed:', error);
            }
        } else {
            // Lógica de registro
            try {
                const response = await axios.post('/api/register', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    direction: formData.direction,
                    telephoneNumber: formData.telephoneNumber,
                    cardNumber: formData.cardNumber,
                    expirationDate: formData.expirationDate,
                    cvv: formData.cvv,
                });
                console.log(response.data);
            } catch (error) {
                console.error('Registration failed:', error);
            }
        }
    };

    return (
        <div className={`wrapper${isLoginActive ? ' login-active' : ' register-active'}`}>
            <div className={`form-box ${isLoginActive ? 'login' : 'register'}`}>
                <form onSubmit={handleSubmit}>
                    <h1>{isLoginActive ? 'Login' : 'Registration'}</h1>
                    {!isLoginActive && (
                        <div className="input-box">
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <FaUser className='icon' />
                        </div>
                    )}
                    <div className="input-box">
                        <input
                            type="text"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    {!isLoginActive && (
                        <>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="direction"
                                    placeholder='Direction'
                                    value={formData.direction}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="telephoneNumber"
                                    placeholder='Telephone Number'
                                    value={formData.telephoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder='Card Number'
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="expirationDate"
                                    placeholder='Expiration Date'
                                    value={formData.expirationDate}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder='CVV'
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                        </>
                    )}
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        {!isLoginActive && <a href="#">Forgot password?</a>}
                    </div>
                    <button type="submit">{isLoginActive ? 'Login' : 'Register'}</button>
                    <div className="register-link">
                        <p>{isLoginActive ? "Don't have an account?" : "Already have an account?"} 
                            <a href="#" onClick={handleToggle}>
                                {isLoginActive ? 'Register' : 'Login'}
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm; */

import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        direction: '',
        telephoneNumber: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLoginActive ? '/api/login' : '/api/register';
        

        const data = isLoginActive
            ? { username: formData.username, password: formData.password }
            : { 
                name: formData.name, 
                email: formData.email, 
                password: formData.password, 
                direction: formData.direction, 
                telephoneNumber: formData.telephoneNumber, 
                cardNumber: formData.cardNumber, 
                expirationDate: formData.expirationDate, 
                cvv: formData.cvv 
            };

        try {
            const response = await axios.post(endpoint, data);
            console.log(response.data);
        } catch (error) {
            console.error(`${isLoginActive ? 'Login' : 'Registration'} failed:`, error);
        }
    };

    return (
        <div className={`wrapper ${isLoginActive ? 'login-active' : 'register-active'}`}>
                <form onSubmit={handleSubmit}>
                    <h1>{isLoginActive ? 'Login' : 'Registration'}</h1>

                    {isLoginActive ? (
                        <>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder='Username'
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <FaLock className='icon' />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <FaLock className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="direction"
                                    placeholder='Direction'
                                    value={formData.direction}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="telephoneNumber"
                                    placeholder='Telephone Number'
                                    value={formData.telephoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder='Card Number'
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="expirationDate"
                                    placeholder='Expiration Date'
                                    value={formData.expirationDate}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder='CVV'
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                />
                                <FaUser className='icon' />
                            </div>
                        </>
                    )}

                    <div className="remember-forgot">
                        {isLoginActive ? (
                            <>
                                <label><input type="checkbox" /> Remember me</label>
                                <a href="#">Forgot password?</a>
                            </>
                        ) : (
                            <label><input type="checkbox" /> I agree to the terms & conditions</label>
                        )}
                    </div>
                    <button type="submit">{isLoginActive ? 'Login' : 'Register'}</button>
                    <div className="register-link">
                        <p>
                            {isLoginActive ? "Don't have an account?" : "Already have an account?"}
                            <a href="#" onClick={() => setIsLoginActive(!isLoginActive)}>
                                {isLoginActive ? 'Register' : 'Login'}
                            </a>
                        </p>
                    </div>
                </form>
            
        </div>
    );
};

export default LoginForm;
