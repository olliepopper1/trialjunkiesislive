export interface Trial {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'expired';
  expiryDate: string;
}

export interface DashboardStats {
  activeTrials: number;
  expiringTrials: number;
  totalTrials: number;
}
