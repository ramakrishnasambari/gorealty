import React from 'react';

const FloorPlans = () => {
  const floorPlans = [
    {
      type: '3 BHK + P',
      area: '1643-1757 SqFt',
      price: '1.35 Cr - 1.61 Cr Onwards',
      image: '3BHK-P'
    },
    {
      type: '3 BHK + L',
      area: '1873-2365 SqFt',
      price: '1.55 Cr - 2.18 Cr Onwards',
      image: '3BHK-L'
    },
    {
      type: '3.5 BHK',
      area: '2674 SqFt',
      price: '2.25 Cr - 2.46 Cr Onwards',
      image: '3.5BHK'
    },
    {
      type: '4 BHK + P',
      area: '2883-2904 SqFt',
      price: '2.50 Cr - 2.75 Cr Onwards',
      image: '4BHK-P'
    },
    {
      type: '4 BHK + L',
      area: '3445-3572 SqFt',
      price: '3.05 Cr - 3.35 Cr Onwards',
      image: '4BHK-L'
    }
  ];

  return (
    <section id="floor-plans" className="section floor-plans">
      <div className="container">
        <h2 className="section-title">Floor Plans</h2>
        
        <div className="floor-plan-grid">
          {floorPlans.map((plan, index) => (
            <div key={index} className="floor-plan-card">
              <div className="floor-plan-image">
                {plan.image} Floor Plan
              </div>
              <div className="floor-plan-content">
                <h3 className="floor-plan-title">{plan.type}</h3>
                <p className="floor-plan-area">{plan.area}</p>
                <p className="floor-plan-price">{plan.price}</p>
                <button className="btn">Enquire Now</button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn">Download Master Plan</button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
