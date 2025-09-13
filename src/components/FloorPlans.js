import React, { useState, useEffect } from 'react';

const FloorPlans = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const floorPlans = [
    {
      id: '3bhk-p',
      type: '3 BHK + P',
      area: '1643 - 1757 SqFt',
      image: '/3bhk_p.png',
      features: ['3 Bedrooms', '3 Bathrooms', 'Living Room', 'Kitchen', 'Balcony', 'Parking'],
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: '3bhk-l',
      type: '3 BHK + L',
      area: '1873 - 2365 SqFt',
      image: '/3bhk_L.png',
      features: ['3 Bedrooms', '3 Bathrooms', 'Living Room', 'Kitchen', 'Study Room', 'Balcony', 'Parking'],
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      popular: true
    },
    {
      id: '3.5bhk',
      type: '3.5 BHK',
      area: '2674 SqFt',
      image: '/3.5bhk.png',
      features: ['3 Bedrooms', '3.5 Bathrooms', 'Living Room', 'Kitchen', 'Study Room', 'Balcony', 'Parking'],
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: '4bhk-p',
      type: '4 BHK + P',
      area: '2883 - 2904 SqFt',
      image: '/4bhk_p.png',
      features: ['4 Bedrooms', '4 Bathrooms', 'Living Room', 'Kitchen', 'Study Room', 'Guest Room', 'Balcony', 'Parking'],
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: '4bhk-l',
      type: '4 BHK + L',
      area: '3445 - 3572 SqFt',
      image: '/4bhk_L.png',
      features: ['4 Bedrooms', '4 Bathrooms', 'Living Room', 'Kitchen', 'Study Room', 'Guest Room', 'Terrace', 'Balcony', 'Parking'],
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (index) => {
    setSelectedPlan(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="floor-plans" className="floor-plans-nextgen">
      <div className="floor-plans-bg">
        <div className="floor-plans-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className={`floor-plans-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="floor-plans-title">
            <span className="title-main">Site &</span>
            <span className="title-sub">Floor Plans</span>
          </h2>
          <p className="floor-plans-subtitle">
            Explore our meticulously designed floor plans and master site layout
          </p>
        </div>

        {/* Master Plan Section */}
        <div className={`master-plan-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="master-plan-card">
            <div className="master-plan-header">
              <h3 className="master-plan-title">Master Site Plan</h3>
              <p className="master-plan-subtitle">Complete overview of the development</p>
            </div>
            <div className="master-plan-image-container">
              <img 
                src="/GMasterPlan.jpg" 
                alt="Master Site Plan" 
                className="master-plan-image"
              />
            </div>
          </div>
        </div>

        {/* Floor Plans Grid */}
        <div className="floor-plans-grid">
          {floorPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`floor-plan-card ${plan.popular ? 'popular' : ''} ${isVisible ? 'animate-in' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span className="badge-text">Most Popular</span>
                </div>
              )}
              
              <div className="plan-image-container">
                <img 
                  src={plan.image} 
                  alt={`${plan.type} Floor Plan`}
                  className="plan-image"
                />
                <div className="plan-overlay">
                  <div className="plan-overlay-content">
                    <span className="overlay-icon">👁️</span>
                    <span className="overlay-text">View Details</span>
                  </div>
                </div>
              </div>

              <div className="plan-info">
                <div className="plan-header">
                  <h3 className="plan-type">{plan.type}</h3>
                  <p className="plan-area">{plan.area}</p>
                </div>
                
                <div className="plan-features">
                  <div className="features-grid">
                    {plan.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-tag">
                        <span className="feature-icon">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                    {plan.features.length > 4 && (
                      <div className="feature-tag more-features">
                        <span className="feature-text">+{plan.features.length - 4} more</span>
                      </div>
                    )}
                  </div>
                </div>

                <button className="view-plan-btn" style={{ background: plan.color }}>
                  <span className="btn-text">View Floor Plan</span>
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Full Size Images */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>×</button>
            <img 
              src={selectedPlan === -1 ? '/GMasterPlan.jpg' : floorPlans[selectedPlan].image}
              alt={selectedPlan === -1 ? 'Master Site Plan' : `${floorPlans[selectedPlan].type} Floor Plan`}
              className="modal-image"
            />
            <div className="modal-info">
              <h3 className="modal-title">
                {selectedPlan === -1 ? 'Master Site Plan' : floorPlans[selectedPlan].type}
              </h3>
              {selectedPlan !== -1 && (
                <p className="modal-area">{floorPlans[selectedPlan].area}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;