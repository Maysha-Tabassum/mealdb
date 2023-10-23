/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='w-50'>
            <ActiveLink className='ml-12 p-4' to="/categories">Categories</ActiveLink>
            <ActiveLink className='ml-12 p-4' to="/services">Services</ActiveLink>
            <ActiveLink className='ml-12 p-4' to="/aboutus">Aboutus</ActiveLink>
        </nav>
    );
};

export default Header;