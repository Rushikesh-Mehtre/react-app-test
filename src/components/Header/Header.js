import React from 'react';
import "./Header.scss"
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className='header-wrapper'>
         <NavLink to='/' >
            Home
          </NavLink>
         <NavLink to='/about' >
            About
          </NavLink>
        </div>
    );
};

export default Header;