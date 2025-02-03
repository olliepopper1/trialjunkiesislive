import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';
import { Trial } from '../types';

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [command, setCommand] = useState<string>('');
  const [trials, setTrials] = useState<Trial[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTrials();
  }, [user]);

  const fetchTrials = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/trials');
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setTrials(data.trials);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <div className="command-interface">
        <input 
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter your trial request..."
          className="command-input"
        />
        <div className="trial-status">
          <h3>Active Trials</h3>
          <div className="trial-list">
            {trials.map((trial, index) => (
              <div key={index} className="trial-card">
                {/* Trial details */}
              </div>
            ))}
          </div>
        </div>
        <div className="expiry-notifications">
          <h3>Upcoming Expiries</h3>
          {/* Notification cards */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
