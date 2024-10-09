import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Header/NavBar';
import SignupForm from './components/loginComponent/SignupForm';
import LoginForm from '././components/loginComponent/LoginForm'
import ItemCatalog from './components/Catalog/ItemCatalog';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/catalog" element={<ItemCatalog/>}/>
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;