import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from '@mui/material';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
