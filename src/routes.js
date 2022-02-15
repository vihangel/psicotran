import React from "react";
import { Routes, Route } from "react-router-dom";

import Table from "./components/home/home";
import Forms from "./components/forms/forms";

import Cash from "./components/cash/cash";
import Feedback from "./components/feedback/feedback";
//import Exam from "./exam"; <Route component={Exam} path="/exam" />
//</Switch><Route component={Table} path="/forms" />

export default function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Forms />
            <Table />
          </div>
        }
      />

      <Route path="/forms" element={<Forms />} />
      <Route path="/caixa" element={<Cash />} />
      <Route path="/relatorios" element={<Feedback />} />
    </Routes>
  );
}
