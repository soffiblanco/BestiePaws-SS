import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { IoSearchSharp, IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='NavBar'>
            <div className="menu-toggle" onClick={toggleMenu}>
                <IoMenuSharp />
            </div>

            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                {['Home', 'Categorías', 'About Us'].map((item) => (
                    <li key={item}
                        onClick={() => setActiveItem(item)}
                        className={activeItem === item ? 'active' : ''}
                    >
                        <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                    </li>
                ))}
                <li>
                    <Link to="/catalog" onClick={() => setActiveItem('Catálogo')}>Catálogo</Link>
                </li>
                <li>
                    <Link to="/login" onClick={() => setActiveItem('Login')}>Login</Link>
                </li>
            </ul>
            
            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <IoSearchSharp className='search-icon' />
            </div>
        </div>
    );
}

export default Navbar;








