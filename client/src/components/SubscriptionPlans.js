import React, { useState } from 'react';
import axios from 'axios';
import './SubscriptionPlans.css';

const PLANS = [
  { id: 'one-time', name: 'One-Time', price: 10, period: 'one-time' },
  { id: 'monthly', name: 'Monthly', price: 30, period: 'month' },
  { id: 'yearly', name: 'Yearly', price: 300, period: 'year' }
];

const SubscriptionPlans = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubscribe = async (planId) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post('/api/subscriptions/subscribe', { planId });
      alert('Successfully subscribed!');
    } catch (err) {
      setError('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscription-container">
      <h2>Choose Your Plan</h2>
      <div className="plans-grid">
        {PLANS.map(plan => (
          <div key={plan.id} className="plan-card">
            <h3>{plan.name}</h3>
            <div className="price">${plan.price}</div>
            <p>{plan.period === 'one-time' ? 'One-time payment' : `Per ${plan.period}`}</p>
            <button 
              onClick={() => handleSubscribe(plan.id)}
              disabled={loading}
              className="subscribe-btn"
            >
              {loading ? 'Processing...' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SubscriptionPlans;
