import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/navbar/logo.svg";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai";

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
          <RouterLink to={"/"} className="scroll">
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
                  duration={100} // Duration of the scroll animation (in milliseconds)
                >
                  <RouterLink to={"/"} className="scroll-link">Home</RouterLink>
                </ScrollLink>
              </li>
              <li className="navbar-item">
                <ScrollLink 
                  activeClass="active"
                  to="why"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={100} // Duration of the scroll animation (in milliseconds)
                >
                  <RouterLink to={"/"} className="scroll-link">Why?</RouterLink>
                </ScrollLink>
              </li>
              <li className="navbar-item" onClick={toggleMobileMenu}>
                <ScrollLink
                  activeClass="active"
                  to="weakendtrip"
                  spy={true}
                  smooth={true}
                  offset={-70} // Offset to adjust for the fixed navbar
                  duration={100} // Duration of the scroll animation (in milliseconds)
                ><RouterLink to={"/"} className="scroll-link">Weakend Trips</RouterLink>
                </ScrollLink>
              </li>
              <li className="navbar-item-dropdown navbar-item">
                Trips <AiOutlineDown />
                <ol className="trip-itmes-drop">
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Ladakh"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={100} // Duration of the scroll animation (in milliseconds)
                    ><RouterLink to={"/"}>Ladakh</RouterLink>
                      
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Manali"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={100} // Duration of the scroll animation (in milliseconds)
                    ><RouterLink to={"/"}>Manali</RouterLink>
                      
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Goa"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={100} // Duration of the scroll animation (in milliseconds)
                    ><RouterLink to={"/"}>Goa</RouterLink>
                      
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Simla"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={100} // Duration of the scroll animation (in milliseconds)
                    ><RouterLink to={"/"}>Simla</RouterLink>
                      
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      to="Himachal"
                      spy={true}
                      smooth={true}
                      offset={-70} // Offset to adjust for the fixed navbar
                      duration={100} // Duration of the scroll animation (in milliseconds)
                    ><RouterLink to={"/"}>Himachal</RouterLink>
                      
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
                  duration={100} // Duration of the scroll animation (in milliseconds)
                ><RouterLink to={"/"}>Reviews</RouterLink>
                  
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-buttons">
          <button className="signup-button">Talk To Expert</button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
