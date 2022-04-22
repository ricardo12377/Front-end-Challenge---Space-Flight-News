import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PaginationProvider } from './components/context/paginationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginationProvider>
    <App />
    </PaginationProvider>
  </React.StrictMode>
);
