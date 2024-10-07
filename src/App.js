import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Header/NavBar';
import HomeComponent from './components/HomeComponent';
import SignupForm from './components/loginComponent/SignupForm';
import LoginForm from './components/loginComponent/LoginForm';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignupForm />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;