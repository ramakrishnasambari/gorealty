import React from 'react';

const Location = () => {
  const nearbyPlaces = [
    'Pallavi International School',
    'Keystone International School',
    'Birla Mandir',
    'Akshaya Care Hospital',
    'Shri Chandra Multispeciality Hospital',
    'Mantra Mall',
    'City Centre Mall',
    'Mulagund Lake',
    'Manasa Hills',
    'Indira Park',
    'International Tech Park',
    'Financial District',
    'PVR RK Cineplex'
  ];

  return (
    <section id="location" className="section location">
      <div className="container">
        <h2 className="section-title">Location & Connectivity</h2>
        
        <div className="location-content">
          <div className="location-info">
            <h3>Prime Location Benefits</h3>
            <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
              The prime neighbourhood of Rajendra Nagar is equipped with the best-in-class social facilities. 
              Situated near the Srinagar Kanyakumari Highway, it has wider connectivity within and outside the city. 
              Nehru Outer Ring Road is also nearby. Rajiv Gandhi International Airport is only a 15-minute drive away 
              from your residence. Budvel railway station is at a mere 5 minutes distance.
            </p>
            
            <h3>Nearby Facilities</h3>
            <ul className="location-list">
              {nearbyPlaces.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
            
            <div style={{ marginTop: '2rem' }}>
              <h3>Connectivity</h3>
              <ul className="location-list">
                <li>Rajiv Gandhi International Airport - 15 minutes</li>
                <li>Budvel Railway Station - 5 minutes</li>
                <li>Srinagar Kanyakumari Highway - Adjacent</li>
                <li>Nehru Outer Ring Road - Nearby</li>
              </ul>
            </div>
          </div>
          
          <div className="location-map">
            Interactive Map
            <br />
            <small>Click to explore the area</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
