
import React, { useState } from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

import Forms from "./components/forms/forms";
import Routes from "./routes";

import Login from "./components/login/login";

import { BrowserRouter as Router } from "react-router-dom";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

  const token = getToken();


  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
