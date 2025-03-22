import React from 'react';
import './Footer.css';
import Logo from '../Intro/Logo';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-logo'>
                <a href='/home'>    <Logo />  </a>
                </div>
                <div className='footer-nav'>
                    <a href='/login'>Login</a>
                    <a href='/signup'>Sign Up</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;