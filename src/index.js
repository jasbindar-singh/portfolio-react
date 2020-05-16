import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const myTheme = createMuiTheme({
  palette: {
    primary: { main: '#0a71c6' },
    secondary: { main: '#41a4f5' }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={myTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);