import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import { CssBaseline } from '@mui/material';
import SetupRouter from './routes';
import { theme } from './themes';
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CssVarsProvider theme={theme}> */}
      <CssBaseline />
        <SetupRouter />
    {/* </CssVarsProvider> */}
  </React.StrictMode>
);