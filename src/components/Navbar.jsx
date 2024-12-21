import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';

const Navbar = () => {
  const handleContactClick = (event) => {
    event.preventDefault(); // Prevent React Router from handling this navigation
    window.location.href = '/contact'; // Force full page reload
  };

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

        {/* Contact link */}
        <li>
          <a href="/contact" onClick={handleContactClick}>Contact</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <a href="/" className="signup-btn">Admin</a>
      </div>
    </nav>
  );
};

export default Navbar;
