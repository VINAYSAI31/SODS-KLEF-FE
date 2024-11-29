import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/sods.png" alt="SODS Club Logo" className="logo" />

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <a href="views/register.jsp" className="signup-btn">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
