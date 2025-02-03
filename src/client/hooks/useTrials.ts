import { useState, useEffect } from 'react';
import type { Trial, DashboardStats } from '../types';
import { TrialService } from '../services/api';

export const useTrials = () => {
  const [trials, setTrials] = useState<Trial[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    activeTrials: 0,
    expiringTrials: 0,
    totalTrials: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const calculateStats = (trials: Trial[]) => ({
    activeTrials: trials.filter(t => t.status === 'active').length,
    expiringTrials: trials.filter(t => 
      new Date(t.expiryDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    ).length,
    totalTrials: trials.length
  });

  useEffect(() => {
    const fetchTrials = async () => {
      try {
        const data = await TrialService.getTrials();
        setTrials(data);
        setStats(calculateStats(data));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch trials');
      } finally {
        setLoading(false);
      }
    };

    fetchTrials();
  }, []);

  return { trials, stats, loading, error };
};
