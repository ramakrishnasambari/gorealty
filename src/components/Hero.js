import React, { useState, useEffect } from 'react';

const Hero = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Smart Home Technology",
    "Sustainable Living",
    "Premium Amenities",
    "Prime Location"
  ];

  const backgroundImage = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80";

  useEffect(() => {
    setIsVisible(true);
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => {
      clearInterval(featureInterval);
    };
  }, [features.length]);

  return (
    <section id="home" className="hero-nextgen">
      {/* Static Background Image */}
      <div className="hero-bg-static">
        <div 
          className="background-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="background-overlay"></div>
      </div>

      
      <div className="container">
        <div className={`hero-content-nextgen ${isVisible ? 'animate-in' : ''}`}>
          {/* Main Property Title with Typing Effect */}
          <div className="property-title-nextgen">
            <div className="title-container">
              <h1 className="main-title-nextgen">
                <span className="title-line-1">GoRealty</span>
                <span className="title-line-2">Property Hub LLP</span>
              </h1>
              <div className="title-underline"></div>
            </div>
            <h2 className="sub-title-nextgen">Rajendra Nagar</h2>
            <p className="location-text-nextgen">
              <span className="location-icon">📍</span>
              At Rajendranagar, Hyderabad by GoRealty Properties
            </p>
          </div>
          
          
          {/* Modern Stats Grid */}
          <div className="stats-grid-nextgen">
            <div className="stat-card">
              <div className="stat-icon">🏗️</div>
              <div className="stat-content">
                <span className="stat-value">12.5</span>
                <span className="stat-unit">Acres</span>
                <span className="stat-label">Land Parcel</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏢</div>
              <div className="stat-content">
                <span className="stat-value">G+33</span>
                <span className="stat-unit">Floors</span>
                <span className="stat-label">Towering Heights</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏠</div>
              <div className="stat-content">
                <span className="stat-value">3-4</span>
                <span className="stat-unit">BHK</span>
                <span className="stat-label">Luxury Units</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <span className="stat-value">1.35</span>
                <span className="stat-unit">Cr+</span>
                <span className="stat-label">Starting Price</span>
              </div>
            </div>
          </div>
          
          {/* Modern Offer Cards */}
          <div className="offers-grid-nextgen">
            <div className="offer-card">
              <div className="offer-icon">💳</div>
              <h4>EOI Payment</h4>
              <p>Flexible payment options available</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🎯</div>
              <h4>Spot Booking</h4>
              <p>Exclusive discounts for early buyers</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">⭐</div>
              <h4>Premium Offers</h4>
              <p>Limited time exclusive benefits</p>
            </div>
          </div>
          
          {/* Modern Pricing Display */}
          <div className="pricing-display-nextgen">
            <div className="pricing-badge">Newly Launched</div>
            <h3 className="bhk-display">3, 3.5 & 4 BHK</h3>
            <div className="price-container">
              <span className="price-label">Starting from</span>
              <div className="price-main">
                <span className="currency">₹</span>
                <span className="amount">1.35</span>
                <span className="unit">Cr</span>
                <span className="suffix">Onwards</span>
              </div>
            </div>
          </div>
          
          {/* Modern CTA Buttons */}
          <div className="cta-section-nextgen">
            <button 
              className="btn-primary-nextgen"
              onClick={() => onOpenModal("Download Brochure - GoRealty Property Hub LLP")}
            >
              <span className="btn-text">Download Brochure</span>
              <span className="btn-icon">📄</span>
            </button>
            <button 
              className="btn-secondary-nextgen"
              onClick={() => onOpenModal("Virtual Tour - GoRealty Property Hub LLP")}
            >
              <span className="btn-text">Virtual Tour</span>
              <span className="btn-icon">🎥</span>
            </button>
            <button 
              className="btn-tertiary-nextgen"
              onClick={() => onOpenModal("Get Quote - GoRealty Property Hub LLP")}
            >
              <span className="btn-text">Get Quote</span>
              <span className="btn-icon">💬</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
