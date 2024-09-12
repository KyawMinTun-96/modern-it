import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './assets/css/index.css';
import './assets/css/media-query.css'

// JavaScript
import "bootstrap/dist/js/bootstrap";


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
);


reportWebVitals();
