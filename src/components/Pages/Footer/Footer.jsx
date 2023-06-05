import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import whiteLogo from "../../../images/white-logo.png";

export default function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="footer">
      <div className="footer-1">
        <NavLink exact="true" to="/">
          <img src={whiteLogo} alt="Logo" className="footer-logo" />
        </NavLink>
      </div>
      <div className="footer-2">
        <p>
          <NavLink
            exact="true"
            to="/contact"
            activeclassname="active"
            className="footer-contact-us-nav-link"
            onClick={handleClick}
          >
            Contact Us
          </NavLink>
        </p>

        {/* <p>Ground Floor, 143 Coronation Drive, Milton QLD 4064</p> */}
        <p>rise@remax.com.au</p>
        <p>+61 434666606</p>
      </div>
      <div className="footer-3">
        <p>Terms and conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}
