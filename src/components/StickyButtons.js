import React from 'react';

const StickyButtons = ({ onOpenModal }) => {
  return (
    <div className="sticky-buttons">
      <button 
        className="sticky-btn sticky-brochure"
        onClick={() => onOpenModal("Download Brochure - Godrej Properties")}
        title="Download Brochure"
      >
        <span className="sticky-icon">📥</span>
        <span className="sticky-text">Brochure</span>
        <div className="sticky-tooltip">Download Brochure</div>
      </button>
      
      <button 
        className="sticky-btn sticky-floorplan"
        onClick={() => onOpenModal("Floor Plan - Godrej Properties")}
        title="Floor Plan"
      >
        <span className="sticky-icon">📥</span>
        <span className="sticky-text">Floor Plan</span>
        <div className="sticky-tooltip">Download Floor Plan</div>
      </button>
    </div>
  );
};

export default StickyButtons;
