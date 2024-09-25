import React from 'react'
import './NavBar.css'
import { IoSearchSharp, IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home')

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleItemClick = (item) => {
        setActiveItem(item);
        setIsMenuOpen(false);
    };

    return (
        <div className='NavBar'>
           <div class="menu-toggle" onClick={toggleMenu}>
            < IoMenuSharp />
           </div>

            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                {['Home', 'Blog', 'About Us', 'Login', 'Sign Up'].map((item)=>(
                    <li key={item}
                    onClick={()=> handleItemClick(item)}
                    className={activeItem === item ? 'active':''}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <IoSearchSharp className='search-icon'/>
        </div>
        </div>
    )
}

export default Navbar