import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider>
      {/* must be used under CssVarsProvider */}
      <CssBaseline />

      {/* The rest of your application */}
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);