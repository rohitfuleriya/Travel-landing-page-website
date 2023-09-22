import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/navbar/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="dropdown">
        <button className="menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        <div className={`dropdown-content ${isMobileMenuOpen ? "show" : ""}`}>
          <ul>
            <li className="navbar-item" onClick={toggleMobileMenu}>
              <Link to="/home">Home</Link>
            </li>
            <li className="navbar-item" onClick={toggleMobileMenu}>
              <Link to="/">Services</Link>
            </li>
            <li className="navbar-item" onClick={toggleMobileMenu}>
              <Link to="/">Popular Tour</Link>
            </li>
            <li className="navbar-item" onClick={toggleMobileMenu}>
              <Link to="/footer">Testimonials</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-buttons">
        <button className="navbar-item signup-button">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
