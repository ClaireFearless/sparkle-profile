import React from 'react'; // Impor React
import ReactDOM from 'react-dom/client'; // Impor ReactDOM
import App from './App.jsx'; // Impor komponen App
import { SpeedInsights } from "@vercel/speed-insights/react"; // Impor SpeedInsights

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>,
);