// src/index.tsx
import ReactDOM from 'react-dom/client';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

import './config/aws-config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();