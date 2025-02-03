import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import SuggestedTrials from '../pages/SuggestedTrials';
import Pricing from '../pages/Pricing';
import Referral from '../pages/Referral';
import History from '../pages/History';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/suggested-trials" element={<SuggestedTrials />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/referral" element={<Referral />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default AppRoutes;
