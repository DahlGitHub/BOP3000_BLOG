import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MemoryRouter } from 'react-router';
import { Cube } from 'react-preloaders2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <MemoryRouter>
        <App />
        <Cube 
          time={2000}
          animation="slide-right"
          background= "linear-gradient(90deg, rgba(249,242,237,1) 0%, rgba(241,241,241,1) 55%, rgba(255,255,255,1) 100%)"
        />
      </MemoryRouter>
  </React.StrictMode>

);

reportWebVitals();
