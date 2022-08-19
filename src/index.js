import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Helmet from 'react-helmet';
import {favicon, appleTouchIcon } from './assets/favicon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dominic's Portfolio</title>
      <link rel="icon" type="image/x-icon" href={favicon}></link>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}></link>

    </Helmet>
    <App />
  </React.StrictMode>
);
