import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
// if login then render App component or vice versa
  let loginStatus = localStorage.getItem("id");
  if(loginStatus !== null){
    root.render(<App />)
  }else{
    root.render(<Login />)
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
