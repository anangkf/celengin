import React from 'react';
import ReactDOM from 'react-dom/client';
import { deepmerge } from '@mui/utils';
import { CssBaseline } from '@mui/material';
import SetupRouter from './routes';
import './styles/global.css';
import { CssVarsProvider } from '@mui/joy';
import { theme as joyTheme, muiTheme } from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = deepmerge(muiTheme, joyTheme);
root.render(
  
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <SetupRouter />
      </CssVarsProvider>
  </React.StrictMode>
);