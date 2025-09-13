import React from 'react';

const Amenities = () => {
  const amenities = [
    { name: 'Clubhouse', icon: '🏢' },
    { name: 'Garden Area', icon: '🌳' },
    { name: 'Gymnasium', icon: '💪' },
    { name: 'Indoor Sports Court', icon: '🏓' },
    { name: 'Kids\' Play Zone', icon: '🎠' },
    { name: 'Party Hall', icon: '🎉' },
    { name: '24/7 Security', icon: '🔒' },
    { name: 'Spa', icon: '🧘' },
    { name: 'Swimming Pool', icon: '🏊' },
    { name: 'Yoga', icon: '🧘‍♀' }
  ];

  return (
    <section id="amenities" className="section amenities">
      <div className="container">
        <h2 className="section-title">Amenities</h2>
        
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              <div className="amenity-icon">{amenity.icon}</div>
              <h3 className="amenity-name">{amenity.name}</h3>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn">Download Amenities</button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
