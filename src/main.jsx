import React from 'react';
import ReactDOM from 'react-dom/client';  // Update import for createRoot
import App from './App';
import './index.css';

// Create root instead of using ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
