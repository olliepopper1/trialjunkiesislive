import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="pricing-container">
      <h2>Choose Your Plan</h2>
      <div className="pricing-cards">
        <div className="price-card free">
          <h3>Free Plan</h3>
          <ul>
            <li>Standard trial generation</li>
            <li>Limited daily requests</li>
            <li>Basic support</li>
          </ul>
          <button className="signup-btn">Get Started</button>
        </div>

        <div className="price-card premium">
          <h3>Premium Plan</h3>
          <ul>
            <li>Priority processing</li>
            <li>Exclusive trials</li>
            <li>Instant access</li>
          </ul>
          <button className="signup-btn premium">Upgrade Now</button>
        </div>

        <div className="price-card elite">
          <h3>Elite Plan</h3>
          <ul>
            <li>Unlimited trials</li>
            <li>Multi-account management</li>
            <li>First access to new services</li>
          </ul>
          <button className="signup-btn elite">Go Elite</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
