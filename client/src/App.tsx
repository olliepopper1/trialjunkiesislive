import React, { useState } from 'react';
import './App.css';

function App() {
  const [command, setCommand] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {!isLoggedIn ? (
        <div className="auth-container">
          <div className="auth-card">
            <h2>Welcome to Trial Junkie</h2>
            <div className="auth-tabs">
              <button className="auth-tab active">Login</button>
              <button className="auth-tab">Sign Up</button>
            </div>
            <input type="email" placeholder="Email" className="auth-input" />
            <input type="password" placeholder="Password" className="auth-input" />
            <button className="auth-button" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          </div>
        </div>
      ) : (
        <>
          <nav className="sidebar">
            <div className="logo">
              <span className="logo-icon">TJ</span>
              <span className="logo-text">Trial Junkie</span>
            </div>
            <div className="nav-items">
              <button className="nav-button active">
                <span className="icon">🎯</span>
                <span>Dashboard</span>
              </button>
              <button className="nav-button">
                <span className="icon">🔄</span>
                <span>Active Trials</span>
              </button>
              <button className="nav-button">
                <span className="icon">⭐</span>
                <span>Suggested</span>
              </button>
              <button className="nav-button">
                <span className="icon">🎁</span>
                <span>Referrals</span>
              </button>
              <button className="nav-button">
                <span className="icon">💎</span>
                <span>Premium</span>
              </button>
            </div>
            <div className="theme-toggle">
              <button onClick={toggleTheme}>
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
            <div className="status-panel">
              <div className="status-item">
                <span className="status-label">Active Agents</span>
                <span className="status-value">5/10</span>
              </div>
              <div className="status-item">
                <span className="status-label">Proxy Health</span>
                <span className="status-value success">98%</span>
              </div>
            </div>
          </nav>

          <main className="main-content">
            <header className="top-bar">
              <div className="command-bar">
                <span className="prompt">&gt;</span>
                <input 
                  type="text" 
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  placeholder="Enter command (e.g., create spotify trial)" 
                />
              </div>
              <div className="quick-actions">
                <button className="action-btn">New Trial</button>
                <button className="action-btn">Rotate Proxy</button>
                <div className="user-profile">
                  <button className="profile-button">JD</button>
                </div>
              </div>
              <div className="notifications">
                <span className="notification-badge">2</span>
                <button className="notification-btn">🔔</button>
              </div>
            </header>

            <div className="content-area">
              <div className="trial-dashboard">
                <h2>Active Trials</h2>
                <div className="trial-grid">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="trial-card">
                      <div className="trial-header">
                        <img src={`/service-${i}.png`} alt="Service" />
                        <div className="trial-info">
                          <h3>Netflix Premium</h3>
                          <p>Expires in 13 days</p>
                        </div>
                      </div>
                      <div className="trial-actions">
                        <button>Share</button>
                        <button>Extend</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="subscription-plans">
                <h2>Upgrade Your Experience</h2>
                <div className="plans-grid">
                  <div className="plan-card">
                    <div className="plan-header">Free</div>
                    <div className="plan-price">$0</div>
                    <ul className="plan-features">
                      <li>✓ Basic trial access</li>
                      <li>✓ Standard wait times</li>
                      <li>✓ Community support</li>
                    </ul>
                    <button className="plan-button">Current Plan</button>
                  </div>
                  <div className="plan-card premium">
                    <div className="plan-header">Premium</div>
                    <div className="plan-price">$9.99</div>
                    <ul className="plan-features">
                      <li>✓ Priority trial access</li>
                      <li>✓ Instant generation</li>
                      <li>✓ VIP support</li>
                      <li>✓ Extended durations</li>
                    </ul>
                    <button className="plan-button">Upgrade Now</button>
                  </div>
                </div>
              </div>

              <div className="agent-grid">
                <div className="agent-card active">
                  <div className="agent-header">
                    <span className="agent-status"></span>
                    Agent #1
                  </div>
                  <div className="agent-body">
                    <p>Creating Netflix trial...</p>
                    <div className="progress-bar">
                      <div className="progress" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="agent-card">
                  <div className="agent-header">
                    <span className="agent-status idle"></span>
                    Agent #2
                  </div>
                  <div className="agent-body">
                    <p>Idle - Ready for task</p>
                  </div>
                </div>
              </div>

              <div className="response-area">
                <div className="message success">
                  <span className="icon">✓</span>
                  Spotify trial account created successfully!
                </div>
                <div className="message info">
                  <span className="icon">ℹ</span>
                  Rotating proxy for next operation...
                </div>
              </div>

              <div className="metrics-panel">
                <div className="metric-card">
                  <h3>Active Trials</h3>
                  <div className="metric-value">24</div>
                </div>
                <div className="metric-card">
                  <h3>Success Rate</h3>
                  <div className="metric-value">94%</div>
                </div>
                <div className="metric-card">
                  <h3>Credits Left</h3>
                  <div className="metric-value">127</div>
                </div>
              </div>
            </div>

            <footer className="app-footer">
              <div className="footer-links">
                <a href="/docs" className="footer-link">📖 Docs</a>
                <a href="/telegram" className="footer-link">📱 Telegram</a>
                <a href="/twitter" className="footer-link">𝕏 Twitter</a>
              </div>
              <div className="footer-status">
                <span className="status-dot"></span>
                All systems operational
              </div>
            </footer>
          </main>
        </>
      )}
    </div>
  );
}

export default App;