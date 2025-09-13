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
            <img src="logo.jpeg" alt="GoRealty Logo" className="logo-image" />
            GoRealty
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
                onOpenModal("Virtual Site Visit - GoRealty Property Hub LLP");
                closeMobileMenu();
              }}
            >
              Virtual Site Visit
            </a>
            <a 
              href="#download" 
              onClick={(e) => {
                e.preventDefault();
                onOpenModal("Download Brochure - GoRealty Property Hub LLP");
                closeMobileMenu();
              }}
            >
              Download Brochure
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
