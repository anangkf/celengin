import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import SetupRouter from './routes';
import { theme } from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssVarsProvider>
      <CssBaseline />
        <SetupRouter />
    </CssVarsProvider>
  </React.StrictMode>
);