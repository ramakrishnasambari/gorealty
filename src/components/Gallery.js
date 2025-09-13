import React from 'react';

const Gallery = () => {
  const galleryItems = [
    'Exterior View 1',
    'Exterior View 2', 
    'Living Room',
    'Master Bedroom',
    'Kitchen',
    'Balcony View',
    'Swimming Pool',
    'Clubhouse',
    'Garden Area',
    'Gymnasium',
    'Kids Play Area',
    'Party Hall'
  ];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              {item}
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn">Download Gallery</button>
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
            Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
