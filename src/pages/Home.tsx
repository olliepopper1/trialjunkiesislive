import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Trial Junkie</h1>
      <p>Your ultimate destination for managing trial subscriptions</p>
      
      <div className="cta-buttons">
        <Link to="/dashboard" className="btn primary">Get Started</Link>
        <Link to="/pricing" className="btn secondary">View Pricing</Link>
      </div>

      <div className="quick-access">
        <Link to="/suggested-trials" className="quick-btn">Explore Trials</Link>
        <Link to="/history" className="quick-btn">View History</Link>
      </div>
    </div>
  );
};

export default Home;
