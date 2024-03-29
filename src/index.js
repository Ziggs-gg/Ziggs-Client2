import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-HBKS6ZYRZF');

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
