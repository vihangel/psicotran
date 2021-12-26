import React from "react";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Table from "./components/home/home";
import Forms from "./components/forms/forms";
import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Forms />
      </div>
    </div>
  );
}

export default App;
