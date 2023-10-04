import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HotelList from "./HotelList";
import HotelDetailCard from "./HotelDetailCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/property/:id" element={<HotelDetailCard />} />
      </Routes>
    </Router>
  );
}

export default App;
