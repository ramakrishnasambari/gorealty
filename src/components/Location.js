import React, { useState, useEffect } from 'react';

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);

  const nearbyPlaces = [
    {
      category: 'Healthcare',
      places: [
        { name: 'Apollo Hospitals', distance: '2.5 km', icon: '🏥' },
        { name: 'Fortis Healthcare', distance: '3.2 km', icon: '🏥' },
        { name: 'Max Super Specialty', distance: '4.1 km', icon: '🏥' }
      ]
    },
    {
      category: 'Education',
      places: [
        { name: 'Delhi Public School', distance: '1.8 km', icon: '🎓' },
        { name: 'Chaitanya Vidyalaya', distance: '2.3 km', icon: '🎓' },
        { name: 'Narayana School', distance: '3.5 km', icon: '🎓' }
      ]
    },
    {
      category: 'Shopping',
      places: [
        { name: 'Forum Mall', distance: '3.8 km', icon: '🛍️' },
        { name: 'Inorbit Mall', distance: '4.5 km', icon: '🛍️' },
        { name: 'City Center Mall', distance: '2.9 km', icon: '🛍️' }
      ]
    },
    {
      category: 'Entertainment',
      places: [
        { name: 'PVR Cinemas', distance: '3.2 km', icon: '🎬' },
        { name: 'INOX Theatre', distance: '4.1 km', icon: '🎬' },
        { name: 'Adventure Park', distance: '5.2 km', icon: '🎢' }
      ]
    }
  ];

  const connectivity = [
    { type: 'Metro Station', name: 'HITEC City Metro', distance: '1.2 km', time: '3 min' },
    { type: 'Bus Stop', name: 'Gachibowli Bus Stop', distance: '0.8 km', time: '2 min' },
    { type: 'Airport', name: 'Rajiv Gandhi International', distance: '25 km', time: '35 min' },
    { type: 'Railway', name: 'Secunderabad Railway', distance: '18 km', time: '25 min' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="location" className="location-nextgen">
      <div className="location-bg">
        <div className="location-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className={`location-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="location-title">
            <span className="title-main">Prime</span>
            <span className="title-sub">Location</span>
          </h2>
          <p className="location-subtitle">
            Strategically located in the heart of Hyderabad's IT corridor with excellent connectivity
          </p>
        </div>

        <div className={`nearby-section ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="section-title">
            <span className="title-icon">📍</span>
            Nearby Places
          </h3>
          <div className="nearby-grid-single">
            {nearbyPlaces.map((category, categoryIndex) => (
              <div key={categoryIndex} className="category-card">
                <h4 className="category-title">{category.category}</h4>
                <div className="places-list">
                  {category.places.map((place, placeIndex) => (
                    <div key={placeIndex} className="place-item">
                      <span className="place-icon">{place.icon}</span>
                      <div className="place-info">
                        <span className="place-name">{place.name}</span>
                        <span className="place-distance">{place.distance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className={`connectivity-section ${isVisible ? 'animate-in' : ''}`}>
              <h3 className="section-title">
                <span className="title-icon">🚌</span>
                Connectivity
              </h3>
              <div className="connectivity-grid">
                {connectivity.map((item, index) => (
                  <div key={index} className="connectivity-item">
                    <div className="connectivity-icon">
                      {item.type === 'Metro Station' && '🚇'}
                      {item.type === 'Bus Stop' && '🚌'}
                      {item.type === 'Airport' && '✈️'}
                      {item.type === 'Railway' && '🚂'}
                    </div>
                    <div className="connectivity-info">
                      <h4 className="connectivity-name">{item.name}</h4>
                      <p className="connectivity-type">{item.type}</p>
                      <div className="connectivity-details">
                        <span className="distance">{item.distance}</span>
                        <span className="time">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`map-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.4023!3d17.3220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzE5LjIiTiA3OMKwMjQnMDguMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GoRealty Location Map"
              ></iframe>
              <div className="map-overlay">
                <div className="map-marker">
                  <div className="marker-pin"></div>
                  <div className="marker-label">GoRealty Property Hub LLP</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`location-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Visit Our Location?</h3>
            <p className="cta-subtitle">Schedule a site visit and explore the neighborhood</p>
            <div className="cta-buttons">
              <button className="btn-cta-primary">
                <span className="btn-text">Schedule Visit</span>
                <span className="btn-icon">📅</span>
              </button>
              <button className="btn-cta-secondary">
                <span className="btn-text">Get Directions</span>
                <span className="btn-icon">🗺️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;