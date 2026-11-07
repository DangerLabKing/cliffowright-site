import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Fonts are bundled with the site (no Google Fonts requests). Three voices:
//   Archivo (condensed)  → headings and project names
//   IBM Plex Serif       → everything you read (bio, descriptions, blog posts)
//   IBM Plex Mono        → labels, menus, buttons, dates, the Now printout and code
// Only the weights the site uses are loaded, to keep pages fast.
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource/ibm-plex-serif/400.css';
import '@fontsource/ibm-plex-serif/400-italic.css';
import '@fontsource/ibm-plex-serif/500.css';
import '@fontsource/ibm-plex-serif/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-mono/700.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
