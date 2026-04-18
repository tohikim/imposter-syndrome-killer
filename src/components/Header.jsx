import logo from '../assets/logo.png';
import homeicon from '../assets/home-icon.png';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo" src={logo} style={{ height: 50, width: 180 }} />
                </div>
                <div className="icon-container">
                    <a href="http://localhost:5173/">
                        <img className="home-icon" src={homeicon} style={{ height: 50, width: 50 }} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header; 