import React from "react";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

import Forms from "./components/forms/forms";
import Routes from "./routes";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
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
