import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <nav className="floating-nav">
        <Link to="/" className="nav-logo">Trial Junkie</Link>
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/trials">Trials</Link>
          <Link to="/account">Account</Link>
        </div>
        <ThemeToggle />
      </nav>
      
      <main className="main-content">
        {children}
      </main>

      <footer className="app-footer">
        <a href="/docs" className="footer-link">Docs</a>
        <a href="https://t.me/trialjunkie" className="footer-link">Telegram</a>
        <a href="https://x.com/trialjunkie" className="footer-link">X</a>
      </footer>
    </div>
  );
};

export default Layout;
