import React, { useState } from 'react';

const Header = ({ onOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo">
            <img src="/logo.png" alt="Godrej Properties Logo" className="logo-image" />
          </a>
          
          <a 
            href="tel:+919989860099" 
            className="header-phone-link"
            title="Call +91 9989860099"
          >
            <span className="header-phone-icon">📞</span>
            <span className="header-phone-text">Call Now</span>
          </a>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#pricing" onClick={closeMobileMenu}>Price</a>
            <a href="#floor-plans" onClick={closeMobileMenu}>Site & Floor Plan</a>
            <a href="#amenities" onClick={closeMobileMenu}>Amenities</a>
            <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
            <a href="#location" onClick={closeMobileMenu}>Location</a>
            <a 
              href="#virtual-tour" 
              onClick={(e) => {
                e.preventDefault();
                onOpenModal("Virtual Site Visit - Godrej Properties");
                closeMobileMenu();
              }}
            >
              Virtual Site Visit
            </a>
            <a 
              href="#download" 
              onClick={(e) => {
                e.preventDefault();
                onOpenModal("Download Brochure - Godrej Properties");
                closeMobileMenu();
              }}
            >
              Download Brochure
            </a>
            <a 
              href="tel:+919989860099" 
              className="mobile-phone-link"
              onClick={closeMobileMenu}
            >
              <span className="phone-icon">📞</span>
              <span className="phone-number">+91 9989860099</span>
            </a>
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
