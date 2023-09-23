import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/navbar/logo.svg";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section id="navbar">
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
              <li className="navbar-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={500} // Duration of the scroll animation (in milliseconds)
                >
                  Home
                </Link>
              </li>
              <li className="navbar-item" onClick={toggleMobileMenu}>
                <Link
                  activeClass="active"
                  to="why"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={500} // Duration of the scroll animation (in milliseconds)
                >
                  Why?
                </Link>
              </li>
              <li className="navbar-item" onClick={toggleMobileMenu}>
                <Link
                  activeClass="active"
                  to="weakendtrip"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={500} // Duration of the scroll animation (in milliseconds)
                >
                  Weakend Trips
                </Link>
              </li>
              <li
                className="navbar-item-dropdown navbar-item"
                onClick={toggleMobileMenu}
              >
                Trips
                <ol className="trip-itmes-drop">
                  <li>
                    <Link
                      activeClass="active"
                      to="Ladakh"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Ladakh
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="Manali"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Manali
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="Goa"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Goa
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="Simla"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Simla
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="Himachal"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Himachal
                    </Link>
                  </li>
                </ol>
              </li>
              <li className="navbar-item" onClick={toggleMobileMenu}>
              <Link
                      activeClass="active"
                      to="Reviews"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Reviews
                    </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-buttons">
          <button className="navbar-item signup-button">
            <Link to="/signup">Talk To Expert</Link>
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
