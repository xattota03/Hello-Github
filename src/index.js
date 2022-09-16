import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login'
import Signup from './Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="box">
      <Signup />
      <Login />
    </div>
  </React.StrictMode>
);

