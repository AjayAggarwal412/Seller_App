import React, { useState } from "react";

const CarSearchBar = ({ carData, setFilteredCars }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredCars = carData.filter((car) =>
      car.carName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCars(filteredCars);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div>
            <input
              type="text"
              className="form-control"
              style={{ width: "350px", borderRadius: "15px" }}
              placeholder="Search by car name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-md-2">
          <select
            className="form-select "
            aria-label="Relevance"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "black",
              width: "130px",
              fontWeight: "bold",
            }}
          >
            <option value="1">Relevance</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            aria-label="All Brands"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "black",
              width: "130px",
              fontWeight: "bold",
            }}
          >
            <option value="all">All Brands</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CarSearchBar;
