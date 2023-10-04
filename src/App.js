import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from "./CarList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page/:page" element={<CarList />} />
        <Route path="/" element={<CarList />} />
      </Routes>
    </Router>
  );
};

export default App;
