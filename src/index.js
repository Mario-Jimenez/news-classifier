import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import amber from '@material-ui/core/colors/amber';
import App from './App';

const defaultTheme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: amber,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
