import React, { useState, useEffect } from 'react';

const Amenities = () => {
  const [isVisible, setIsVisible] = useState(false);

  const amenities = [
    {
      id: 1,
      name: 'Clubhouse',
      description: 'Elegant clubhouse with modern facilities for community gatherings and events',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🏢',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Event Hall', 'Conference Room', 'Lounge Area']
    },
    {
      id: 2,
      name: 'Swimming Pool',
      description: 'Olympic-size swimming pool with modern filtration system and safety features',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🏊',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['Olympic Size', 'Kids Pool', 'Jacuzzi']
    },
    {
      id: 3,
      name: 'Gymnasium',
      description: 'State-of-the-art fitness center with modern equipment and personal trainers',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '💪',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['Cardio Zone', 'Weight Training', 'Yoga Studio']
    },
    {
      id: 4,
      name: 'Garden Area',
      description: 'Beautiful landscaped gardens with walking paths and seating areas',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🌳',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: ['Walking Paths', 'Seating Areas', 'Landscaping']
    },
    {
      id: 5,
      name: 'Kids Play Zone',
      description: 'Safe and fun play area designed specifically for children of all ages',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🎠',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      features: ['Playground', 'Safety Features', 'Supervised Area']
    },
    {
      id: 6,
      name: 'Spa & Wellness',
      description: 'Relaxing spa facilities with massage therapy and wellness programs',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🧘',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      features: ['Massage Therapy', 'Sauna', 'Steam Room']
    },
    {
      id: 7,
      name: 'Indoor Sports',
      description: 'Multi-purpose indoor sports court for basketball, badminton, and table tennis',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🏓',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      features: ['Basketball', 'Badminton', 'Table Tennis']
    },
    {
      id: 8,
      name: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance and trained personnel',
      image: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🔒',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['CCTV Surveillance', 'Trained Guards', 'Access Control']
    },
    {
      id: 9,
      name: 'Party Hall',
      description: 'Spacious party hall perfect for celebrations and community events',
      image: 'https://images.unsplash.com/photo-1519167758481-83f142bb8bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🎉',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      features: ['Event Space', 'Audio System', 'Catering Kitchen']
    },
    {
      id: 10,
      name: 'Yoga & Meditation',
      description: 'Peaceful yoga and meditation space for mental and physical wellness',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: '🧘‍♀️',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      features: ['Yoga Classes', 'Meditation', 'Wellness Programs']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="amenities" className="amenities-nextgen">
      <div className="amenities-bg">
        <div className="amenities-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className={`amenities-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="amenities-title">
            <span className="title-main">Premium</span>
            <span className="title-sub">Amenities</span>
          </h2>
          <p className="amenities-subtitle">
            Experience luxury living with our world-class amenities and facilities
          </p>
        </div>

        {/* All Amenities at a Glance */}
        <div className={`amenities-grid-preview ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="grid-title">All Amenities at a Glance</h3>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div 
                key={amenity.id} 
                className="amenity-preview-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="preview-icon" style={{ background: amenity.color }}>
                  <span className="icon-emoji">{amenity.icon}</span>
                </div>
                <h4 className="preview-name">{amenity.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;