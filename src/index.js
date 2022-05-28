import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

const root = ReactDOM.createRoot(document.getElementById('root'));  // root는 index.html에 정의
root.render(
  // App은 app.jsx에 정의
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
