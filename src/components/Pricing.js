import React, { useState, useEffect } from 'react';

const Pricing = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const pricingData = [
    {
      type: '3 BHK + P',
      area: '1643 SqFt - 1757 SqFt',
      areaType: '(Carpet Area)',
      price: '1.35 Cr - 1.61 Cr',
      priceRange: 'Onwards',
      popular: false,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      type: '3 BHK + L',
      area: '1873 SqFt - 2365 SqFt',
      areaType: '(Carpet Area)',
      price: '1.55 Cr - 2.18 Cr',
      priceRange: 'Onwards',
      popular: true,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      type: '3.5 BHK',
      area: '2674 SqFt',
      areaType: '(Carpet Area)',
      price: '2.25 Cr - 2.46 Cr',
      priceRange: 'Onwards',
      popular: false,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      type: '4 BHK + P',
      area: '2883 SqFt - 2904 SqFt',
      areaType: '(Carpet Area)',
      price: '2.50 Cr - 2.75 Cr',
      priceRange: 'Onwards',
      popular: false,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      type: '4 BHK + L',
      area: '3445 SqFt - 3572 SqFt',
      areaType: '(Carpet Area)',
      price: '3.05 Cr - 3.35 Cr',
      priceRange: 'Onwards',
      popular: false,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="pricing" className="pricing-nextgen">
      <div className="pricing-bg">
        <div className="pricing-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className={`pricing-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="pricing-title">
            <span className="title-main">Pricing &</span>
            <span className="title-sub">Saleable Area</span>
          </h2>
          <p className="pricing-subtitle">
            Choose your perfect home from our premium collection
          </p>
        </div>

        <div className="pricing-cards-container">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`pricing-card ${item.popular ? 'popular' : ''} ${isVisible ? 'animate-in' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setSelectedCard(index)}
              onMouseLeave={() => setSelectedCard(null)}
            >
              {item.popular && (
                <div className="popular-badge">
                  <span className="badge-text">Most Popular</span>
                </div>
              )}
              
              <div className="card-header">
                <div className="card-icon" style={{ background: item.color }}>
                  <span className="icon-text">{item.type.split(' ')[0]}</span>
                </div>
                <h3 className="card-title">{item.type}</h3>
                <p className="card-area">{item.area}</p>
                <p className="card-area-type">{item.areaType}</p>
              </div>

              <div className="card-pricing">
                <div className="price-main">
                  <span className="currency">₹</span>
                  <span className="price-amount">{item.price}</span>
                </div>
                <p className="price-range">{item.priceRange}</p>
              </div>


              <div className="card-actions">
                <button 
                  className="btn-primary-card"
                  onClick={() => onOpenModal("Enquire Now - GoRealty Property Hub LLP")}
                >
                  <span className="btn-text">Enquire Now</span>
                  <span className="btn-icon">→</span>
                </button>
                <button className="btn-secondary-card">
                  <span className="btn-text">View Details</span>
                </button>
              </div>

              <div className="card-hover-effect" style={{ background: item.color }}></div>
            </div>
          ))}
        </div>

        <div className={`pricing-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Make Your Dream Home a Reality?</h3>
            <p className="cta-subtitle">Contact our experts for personalized assistance</p>
            <div className="cta-buttons">
              <button 
                className="btn-cta-primary"
                onClick={() => onOpenModal("Enquire Now - GoRealty Property Hub LLP")}
              >
                <span className="btn-text">Enquire Now</span>
                <span className="btn-icon">📞</span>
              </button>
              <button 
                className="btn-cta-secondary"
                onClick={() => onOpenModal("Download Brochure - GoRealty Property Hub LLP")}
              >
                <span className="btn-text">Download Brochure</span>
                <span className="btn-icon">📄</span>
              </button>
              <button 
                className="btn-cta-tertiary"
                onClick={() => onOpenModal("Schedule Visit - GoRealty Property Hub LLP")}
              >
                <span className="btn-text">Schedule Visit</span>
                <span className="btn-icon">🏠</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
