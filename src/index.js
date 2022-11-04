import React from 'react';
import ReactDOM from 'react-dom/client';
import { deepmerge } from '@mui/utils';
import { CssBaseline } from '@mui/material';
import SetupRouter from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/global.css';
import { CssVarsProvider } from '@mui/joy';
import { theme as joyTheme, muiTheme } from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = deepmerge(muiTheme, joyTheme);
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <SetupRouter />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
);