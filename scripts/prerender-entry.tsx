import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const html = renderToString(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

process.stdout.write(html);
