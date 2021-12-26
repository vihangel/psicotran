import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home/home";
import Forms from "./components/forms/forms";
//import Exam from "./exam"; <Route component={Exam} path="/exam" />

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Forms} path="/forms" />
    </BrowserRouter>
  );
};

export default Routes;
