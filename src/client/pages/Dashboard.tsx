import React from 'react';
import { useTrials } from '../hooks/useTrials';
import { StatCard } from '../components/StatCard';
import { TrialCard } from '../components/TrialCard';

const Dashboard: React.FC = () => {
  const { trials, stats, loading, error } = useTrials();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="new-trial-btn">New Trial</button>
      </header>

      <div className="stats-grid">
        <StatCard title="Active Trials" value={stats.activeTrials} />
        <StatCard title="Expiring Soon" value={stats.expiringTrials} />
        <StatCard title="Total Trials" value={stats.totalTrials} />
      </div>

      <div className="trials-list">
        <h3>Your Trials</h3>
        {trials.map(trial => (
          <TrialCard key={trial.id} trial={trial} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;