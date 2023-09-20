import React from 'react';
import './navbar.css'; 
import logo from '../Assets/navbar/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/">Services</a></li>
        <li className="navbar-item"><a href="/">Popular Tour</a></li>
        <li className="navbar-item"><a href="/footer">Testmonils</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-button"> Log in</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
