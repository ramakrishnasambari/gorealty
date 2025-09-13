import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GoRealty</h3>
            <p style={{ marginBottom: '1rem', color: '#bdc3c7' }}>
              Premium Real Estate Solutions for your dream home. 
              Experience luxury living with world-class amenities and 
              prime locations across Hyderabad.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ padding: '8px 16px' }}>
                Get Instant Call Back
              </button>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#floor-plans">Floor Plans</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>📞 +91 2246181985</li>
              <li>📧 info@gorealty.com</li>
              <li>📍 Rajendranagar, Hyderabad</li>
              <li>🏢 Telangana 500077</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#rera">RERA Registration</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#cookies">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Copyright © 2025 GoRealty | All Rights Reserved | 
            RERA No: P02400009910 | 
            <a href="#disclaimer" style={{ color: '#bdc3c7', marginLeft: '0.5rem' }}>
              Disclaimer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
