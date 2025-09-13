import React from 'react';

const Pricing = () => {
  const pricingData = [
    {
      type: '3 BHK + P',
      area: '1643 SqFt - 1757 SqFt',
      areaType: '(Carpet Area)',
      price: '1.35 Cr - 1.61 Cr Onwards'
    },
    {
      type: '3 BHK + L',
      area: '1873 SqFt - 2365 SqFt',
      areaType: '(Carpet Area)',
      price: '1.55 Cr - 2.18 Cr Onwards'
    },
    {
      type: '3.5 BHK',
      area: '2674 SqFt',
      areaType: '(Carpet Area)',
      price: '2.25 Cr - 2.46 Cr Onwards'
    },
    {
      type: '4 BHK + P',
      area: '2883 SqFt - 2904 SqFt',
      areaType: '(Carpet Area)',
      price: '2.50 Cr - 2.75 Cr Onwards'
    },
    {
      type: '4 BHK + L',
      area: '3445 SqFt - 3572 SqFt',
      areaType: '(Carpet Area)',
      price: '3.05 Cr - 3.35 Cr Onwards'
    }
  ];

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2 className="section-title">Pricing and Saleable Area</h2>
        
        <div className="pricing-table">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Saleable Area</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.type}</strong></td>
                  <td>
                    {item.area} {item.areaType}
                  </td>
                  <td className="price-highlight">{item.price}</td>
                  <td>
                    <button className="btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                      Price Breakup
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn">Enquire Now</button>
          <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
            Download Costing Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
