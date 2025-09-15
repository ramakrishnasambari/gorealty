import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose, title = "Register Here And Avail The Best Offers!!" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Hello GoRealty Team,

I came across your listing on the Official Website and I'm interested in knowing more about:

🏢 *Project:* GoRealty Property Hub LLP

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email || 'Not provided'}
📱 *Phone:* ${formData.phone}

💰 My Appx Budget Range: __________
📐 Preferred Size (SQ.FT): __________
📝 Additional Notes / Requirements: __________

Please connect with me for further details.

Thank you.`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919989860099?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    
    // Close modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-logo-container">
            <img src="logo.png" alt="Godrej Properties Logo" className="modal-logo-img" />
          </div>
        </div>

        <div className="modal-body">

          <div className="modal-content-wrapper">
            <div className="promise-section">
              <h3 className="promise-title">We Promise</h3>
              <div className="promise-items">
                <div className="promise-item">
                  <div className="promise-icon">🔄</div>
                  <span>Instant Call Back</span>
                </div>
                <div className="promise-item">
                  <div className="promise-icon">🚗</div>
                  <span>Free Site Visit</span>
                </div>
                <div className="promise-item">
                  <div className="promise-icon">💰</div>
                  <span>Unmatched Price</span>
                </div>
              </div>
            </div>

            <div className="form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="phone-input-wrapper">
                    <select className="country-code">
                      <option value="+91">India (+91)</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Get Instant Call Back
                </button>
              </form>

              <div className="contact-info">
                <div className="contact-number">
                  <span className="phone-icon">📞</span>
                  <span>+91 9989860099</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
