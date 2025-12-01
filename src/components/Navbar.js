import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT - LOGO */}
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      {/* HAMBURGER ICON */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* CENTER - MENU */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        {/* MOBILE/TABLET CALL BUTTON */}
        <li className="mobile-call-btn">
          <a href="tel:+91-9229566800" onClick={() => setMenuOpen(false)}>
            <FiPhone style={{ marginRight: "8px" }} />
            Call Now
          </a>
        </li>
      </ul>

      {/* RIGHT - DESKTOP CALL BUTTON */}
      <div className="nav-right">
        <a href="tel:+91-9229566800" className="call-btn">
          <FiPhone className="call-icon" />
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
