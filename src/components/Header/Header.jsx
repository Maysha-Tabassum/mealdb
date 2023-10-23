/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav >
            <Link className='header' to="/categories">Categories</Link>
            <Link className='header' to="/services">Services</Link>
            <Link className='header' to="/aboutus">Aboutus</Link>
        </nav>
    );
};

export default Header;