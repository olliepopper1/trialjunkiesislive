import type { Trial } from '../types';

const BASE_URL = process.env.REACT_APP_API_URL || '/api';

export const TrialService = {
  async getTrials(): Promise<Trial[]> {
    const response = await fetch(`${BASE_URL}/trials`);
    return response.json();
  },

  async createTrial(trial: Omit<Trial, 'id'>): Promise<Trial> {
    const response = await fetch(`${BASE_URL}/trials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trial),
    });
    return response.json();
  }
};
