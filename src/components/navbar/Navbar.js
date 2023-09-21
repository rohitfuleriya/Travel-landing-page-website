import React from 'react';
import './navbar.css'; 
import logo from '../Assets/navbar/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item"><Link to="/home">Home</Link></li>
        <li className="navbar-item"><Link to="/">Services</Link></li>
        <li className="navbar-item"><Link to="/">Popular Tour</Link></li>
        <li className="navbar-item"><Link to="/footer">Testmonils</Link></li>
      </ul>
      <div className="navbar-buttons">
        <button className="navbar-item login-button"><Link to="/login">Login</Link></button>
        <button className="navbar-item signup-button"><Link to="/signup">Sign up</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
