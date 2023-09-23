import React from "react";
import "./footer.css";

import footerBg from "../Assets/navbar/footer-background.svg";
import logo from "../Assets/navbar/logo.svg";
import phone from "../Assets/navbar/phone.svg";
import gmail from "../Assets/navbar/Gmail_Logo.svg";

export default function Footer() {
  return (
    <section id="footer">
      <div className="footer-parent">
        <div className="subscribe-details">
          <img src={footerBg} alt="" />
          <div className="child-class">
            <div className="select-class">
              <span>Newsletter Sign up</span>
              <h1>Subscribe to Get Special Offers</h1>
            </div>
            <div className="submit-button">
              <input type="email" name="" id="" placeholder="  Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="contact-details">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="contact">
            <img src={phone} alt="" />
            <span>+918982156674</span>
          </div>
          <div className="email">
            <img src={gmail} alt="" />
            <span>Gomaxxo@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
