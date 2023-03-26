import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <BrowserRouter basename="/this-is-retoucher">
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
