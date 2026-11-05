import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@fontsource-variable/archivo/wdth.css';
// JetBrains Mono: the "terminal" font used in the Now box. Bundled with the site (no Google Fonts needed).
import '@fontsource-variable/jetbrains-mono';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
