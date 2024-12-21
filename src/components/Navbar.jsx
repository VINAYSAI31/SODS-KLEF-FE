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
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* Contact link */}
       
      </ul>
      <div className="auth-buttons">
        <Link to="/" className="signup-btn">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
