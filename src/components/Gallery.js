import React, { useState, useEffect } from 'react';

const Gallery = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      title: 'Exterior View',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stunning exterior view of the residential complex'
    },
    {
      id: 2,
      title: 'Luxury Living Room',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Spacious and elegantly designed living area'
    },
    {
      id: 3,
      title: 'Master Bedroom',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Luxurious master bedroom with modern amenities'
    },
    {
      id: 4,
      title: 'Modern Kitchen',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Fully equipped modern kitchen with premium finishes'
    },
    {
      id: 5,
      title: 'Swimming Pool',
      category: 'Amenities',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Olympic-size swimming pool with modern facilities'
    },
    {
      id: 6,
      title: 'Garden Area',
      category: 'Amenities',
      image: 'garden.jpg',
      description: 'Beautiful landscaped gardens with walking paths'
    },
    {
      id: 7,
      title: 'Fitness Center',
      category: 'Amenities',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'State-of-the-art fitness center with modern equipment'
    },
    {
      id: 8,
      title: 'Clubhouse',
      category: 'Amenities',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant clubhouse for community gatherings'
    },
    {
      id: 9,
      title: 'Balcony View',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Breathtaking balcony view of the city skyline'
    },
    {
      id: 10,
      title: 'Kids Play Area',
      category: 'Amenities',
      image: 'playarea.jpg',
      description: 'Safe and fun play area for children'
    },
    {
      id: 11,
      title: 'Spa & Wellness',
      category: 'Amenities',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Relaxing spa facilities for wellness and rejuvenation'
    },
    {
      id: 12,
      title: 'Party Hall',
      category: 'Amenities',
      image: 'hall.jpg',
      description: 'Spacious party hall for celebrations and events'
    }
  ];

  const categories = ['All', 'Exterior', 'Interior', 'Amenities'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="gallery-nextgen">
      <div className="gallery-bg">
        <div className="gallery-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className={`gallery-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="gallery-title">
            <span className="title-main">Photo</span>
            <span className="title-sub">Gallery</span>
          </h2>
          <p className="gallery-subtitle">
            Explore our premium residential complex through stunning visuals
          </p>
        </div>


        {/* Gallery Grid */}
        <div className={`gallery-grid-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ '--delay': `${index * 0.1}s` }}
                onClick={() => openModal(image)}
              >
                <div className="image-container">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">🔍</span>
                      <span className="overlay-text">View Full Size</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`gallery-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Want to See More?</h3>
            <p className="cta-subtitle">Download our complete gallery or take a virtual tour</p>
            <div className="cta-buttons">
              <button 
                className="btn-cta-primary"
                onClick={() => onOpenModal("Download Gallery - GoRealty Property Hub LLP")}
              >
                <span className="btn-text">Download Gallery</span>
                <span className="btn-icon">📥</span>
              </button>
              <button 
                className="btn-cta-secondary"
                onClick={() => onOpenModal("Virtual Tour - GoRealty Property Hub LLP")}
              >
                <span className="btn-text">Virtual Tour</span>
                <span className="btn-icon">🎥</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>×</button>
            <button className="modal-nav-btn prev-btn" onClick={prevImage}>‹</button>
            <button className="modal-nav-btn next-btn" onClick={nextImage}>›</button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="modal-image"
            />
            
            <div className="modal-info">
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-description">{selectedImage.description}</p>
              <div className="modal-category">{selectedImage.category}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;