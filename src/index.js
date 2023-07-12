import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Student from './Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Student Name = {"Anil"} />
  </React.StrictMode>
);


