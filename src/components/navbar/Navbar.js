import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/navbar/logo.svg";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai"


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
          <RouterLink to={"/"}>
          <img src={logo} alt="Logo" />
          </RouterLink>
        </div>
        <div className="dropdown">
          <button className="menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
          <div className={`dropdown-content ${isMobileMenuOpen ? "show" : ""}`}>
            <ul>
              <li className="navbar-item">
                <ScrollLink
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={500} // Duration of the scroll animation (in milliseconds)
                >
                  Home
                </ScrollLink>
              </li>
              <li className="navbar-item" >
                <ScrollLink
                  activeClass="active"
                  to="why"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={500} // Duration of the scroll animation (in milliseconds)
                >
                  Why?
                </ScrollLink>
              </li>
              <li className="navbar-item" onClick={toggleMobileMenu}>
                <ScrollLink
                  activeClass="active"
                  to="weakendtrip"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={500} // Duration of the scroll animation (in milliseconds)
                >
                  Weakend Trips
                </ScrollLink>
              </li>
              <li
                className="navbar-item-dropdown navbar-item"
              >
                Trips <AiOutlineDown/>
                <ol className="trip-itmes-drop">
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Ladakh"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Ladakh
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Manali"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Manali
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Goa"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Goa
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Simla"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Simla
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Himachal"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Himachal
                    </ScrollLink>
                  </li>
                </ol>
              </li>
              <li className="navbar-item" onClick={toggleMobileMenu}>
              <ScrollLink
                      activeClass="active"
                      to="Reviews"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={500} // Duration of the scroll animation (in milliseconds)
                    >
                      Reviews
                    </ScrollLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-buttons">
          <button className=" navbar-item signup-button">
            <RouterLink className="whatshapp-link" to="/whatshapp">Talk To Expert</RouterLink>
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
