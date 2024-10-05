import React from 'react';
import './NavBar.css'
import  {IoSearchSharp} from "react-icons/io5";

const NavBar = () => {
return (
    <div className= 'navbar'>
        <img src='' alt='' className='logo'/>

        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>

        </ul>

        <div className='search-box'>
            
            Search <IoSearchSharp />
        </div>

        <img src='' alt='' className='toggle-icon'/>

    </div>
)
}

export default NavBar;






