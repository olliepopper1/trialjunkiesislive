import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { LayoutProps } from '../types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`layout ${theme}`}>
      <header>
        <nav>
          {/* Navigation items */}
        </nav>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <main>{children}</main>

      <footer>
        <div className="social-links">
          <a href="/docs" className="footer-btn">Docs</a>
          <a href="https://t.me/trialjunkie" className="footer-btn">Telegram</a>
          <a href="https://x.com/trialjunkie" className="footer-btn">X</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
