
import React, { useState } from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

import Forms from "./components/forms/forms";
import Routes from "./routes";

import Login from "./components/login/login";

import useToken from './service/useToken';

import { BrowserRouter as Router } from "react-router-dom";


function App() {

  const { token, setToken } = useToken();


  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main">
          <Routes token />
        </div>
      </div>
    </Router>
  );
}

export default App;
