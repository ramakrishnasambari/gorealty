import React, { useState, useEffect } from 'react';

const About = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <section id="about" className="about-nextgen">
      <div className="about-bg">
        <div className="about-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className={`about-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="about-title">
            <span className="title-main">About</span>
            <span className="title-sub">Godrej Properties</span>
          </h2>
          <p className="about-subtitle">
            Building dreams and transforming skylines for over a century
          </p>
        </div>

        <div className="about-content">
          <div className={`about-intro ${isVisible ? 'animate-in' : ''}`}>
            <div className="intro-card">
              <div className="intro-header">
                <div className="intro-icon">🏢</div>
                <h3 className="intro-title">About Godrej Properties</h3>
              </div>
              <p className="intro-text">
                Founded in 1897, Godrej Properties is a leading real estate developer in India with a range of residential townships, business parks, and mixed-use properties as part of its portfolio. The firm's properties stand out for their lovely architecture, quality residences, pleasant green environs, and use of cutting-edge technologies.
              </p>
              <div className="intro-highlight">
                <span className="highlight-number">125+</span>
                <span className="highlight-text">Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className={`about-values ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🏗️</div>
                <h4 className="value-title">Quality Construction</h4>
                <p className="value-desc">Lovely architecture and quality residences built with cutting-edge technologies</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌿</div>
                <h4 className="value-title">Green Environment</h4>
                <p className="value-desc">Pleasant green environs creating sustainable living spaces</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🏢</div>
                <h4 className="value-title">Mixed-Use Properties</h4>
                <p className="value-desc">Residential townships, business parks, and integrated developments</p>
              </div>
            </div>
          </div>

          <div className={`rera-section ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="rera-title">RERA Compliance & Legal Information</h3>
            <div className="rera-content">
              <div className="rera-info">
                <div className="rera-item">
                  <span className="rera-label">RERA No:</span>
                  <span className="rera-value">P02400009910</span>
                </div>
                <p className="rera-description">
                  According to the RERA Act 2016 of the Government of India, all projects of the Godrej Properties including the Godrej Rajendra Nagar, are listed on the Telangana Government's RERA website under registered projects.
                </p>
                <div className="rera-details">
                  <div className="rera-detail-item">
                    <span className="detail-label">Project Registration No.:</span>
                  </div>
                  <div className="rera-detail-item">
                    <span className="detail-label">Site Address:</span>
                    <span className="detail-value">Godrej Rajendra Nagar: 7CQ7+8WH, Rajendranagar mandal, Hyderabad, Telangana 500077</span>
                  </div>
                  <div className="rera-detail-item">
                    <span className="detail-label">Corporate Office:</span>
                    <span className="detail-value">Godrej Properties: Godrej Properties Limited, Unit No. 5C, 5th Floor, Godrej One, Pirojshanagar, Vikhroli East, Mumbai - 400 079</span>
                  </div>
                  <div className="rera-detail-item">
                    <span className="detail-label">Government RERA Authorised Advertiser's:</span>
                    <span className="detail-value">Godrej Properties</span>
                  </div>
                  <div className="rera-detail-item">
                    <span className="detail-label">Registration No:</span>
                  </div>
                  <div className="rera-detail-item">
                    <span className="detail-label">CIN:</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`disclaimer-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="disclaimer-content">
              <h4 className="disclaimer-title">Important Disclaimer</h4>
              <p className="disclaimer-text">
                We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
