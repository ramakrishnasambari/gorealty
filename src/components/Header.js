import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo">
            <img src="/logo.jpeg" alt="GoRealty Logo" className="logo-image" />
            GoRealty
          </a>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#pricing">Price</a>
            <a href="#floor-plans">Site & Floor Plan</a>
            <a href="#amenities">Amenities</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#virtual-tour">Virtual Site Visit</a>
            <a href="#download">Download Brochure</a>
          </nav>
          
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
