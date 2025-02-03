import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx'; // Make sure extension is included
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
