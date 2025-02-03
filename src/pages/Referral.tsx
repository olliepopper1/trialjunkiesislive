import React, { useState } from 'react';

const Referral: React.FC = () => {
  const [referralLink, setReferralLink] = useState<string>('https://trialjunkie.com/ref/123');

  const copyToClipboard = () => {
    navigator?.clipboard?.writeText(referralLink);
  };

  return (
    <div className="referral-container">
      <div className="referral-info">
        <h2>Invite Friends & Earn Rewards</h2>
        <div className="link-box">
          <input 
            type="text" 
            value={referralLink} 
            readOnly 
          />
          <button onClick={copyToClipboard}>
            Copy
          </button>
        </div>
      </div>

      <div className="leaderboard">
        <h3>Top Referrers</h3>
        {/* Leaderboard content */}
      </div>

      <div className="rewards">
        <h3>Your Rewards</h3>
        {/* Rewards listing */}
      </div>
    </div>
  );
};

export default Referral;
