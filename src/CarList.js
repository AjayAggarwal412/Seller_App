import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import CarCard from "./CarCard";
import { Col, Container, Row } from "react-bootstrap";
import carData from "./data.json";
import CarSearchBar from "./CarSearchBar";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CarList = () => {
  const itemsPerPage = 6;
  const { page } = useParams();
  const currentPage = parseInt(page, 10) || 1;
  const totalPages = Math.ceil(carData.length / itemsPerPage);
  const [filteredCars, setFilteredCars] = useState(carData);

  const handlePageChange = (newPage) => {
    // Update the URL to reflect the new page
    window.history.pushState({}, "", `/page/${newPage}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageText = `Page ${currentPage} of ${totalPages}`;

  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: Math.min(totalPages, 10) },
      (_, index) => index + 1
    );

    return (
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              pageNumber === currentPage ? "active" : ""
            }`}
            style={{ margin: "0 5px" }}
          >
            <Link
              to={`/page/${pageNumber}`}
              className="page-link"
              onClick={() => handlePageChange(pageNumber)}
              style={{ color: "black" }}
            >
              {pageNumber}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Container
        style={{
          padding: "30px",
          backgroundColor: "lightgray",
        }}
      >
        <Row
          style={{
            padding: "20px",
            marginBottom: "30px",
            borderRadius: "20px",
            backgroundColor: "lightsteelblue",
          }}
        >
          <CarSearchBar carData={carData} setFilteredCars={setFilteredCars} />
        </Row>
        <Row>
          {filteredCars.slice(startIndex, endIndex).map((car, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              style={{ marginBottom: "30px" }}
            >
              <CarCard car={car} />
            </Col>
          ))}
        </Row>

        <Row
          style={{
            marginTop: "20px",
            backgroundColor: "lightsteelblue",
            borderRadius: "20px",
          }}
        >
          <Col className="d-flex justify-content-between align-items-center">
            <div style={{ fontWeight: "bold" }}>{pageText}</div>
            {totalPages > 1 && (
              <nav>
                <ul className="pagination" style={{ marginTop: "20px" }}>
                  {currentPage > 1 && (
                    <li className="page-item">
                      <Link
                        to={`/page/${currentPage - 1}`}
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        <IoIosArrowBack />
                      </Link>
                    </li>
                  )}
                  {renderPageNumbers()}
                  {currentPage < totalPages && (
                    <li className="page-item">
                      <Link
                        to={`/page/${currentPage + 1}`}
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        <IoIosArrowForward />
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarList;
