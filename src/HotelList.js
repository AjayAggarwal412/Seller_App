import React, { useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { CgSandClock } from "react-icons/cg";
import hotelData from "./data.json";
import HotelCard from "./HotelCard";
import { IconContext } from "react-icons";

const HotelList = () => {
  const [displayCount, setDisplayCount] = useState(3);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + 3);
  };

  const handleCityButtonClick = (city) => {
    setSelectedCity(city);
  };

  const handleViewAllClick = () => {
    setSelectedCity(null);
  };

  const commonDivStyle = {
    backgroundColor: "#F3E2F9",
    padding: "10px 25px 10px 25px",
    borderRadius: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    border: "1px solid transparent",
  };

  const activeButtonStyle = {
    backgroundColor: "blue",
    padding: "10px 25px 10px 25px",
    borderRadius: "20px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    border: "1px solid transparent",
  };

  const hotelsToDisplay = hotelData.hotels
    .filter((hotel) => selectedCity === null || hotel.location === selectedCity)
    .slice(0, displayCount);

  const hotelGroups = [];
  for (let i = 0; i < hotelsToDisplay.length; i += 3) {
    hotelGroups.push(hotelsToDisplay.slice(i, i + 3));
  }

  return (
    <Container style={{ backgroundColor: "#F7F2F9", padding: "30px" }}>
      <Row>
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          Featured Listed Property
        </h1>
      </Row>

      <Row style={{ marginTop: "20px", marginBottom: "40px" }}>
        <Col>
          <Button
            style={
              selectedCity === "New York" ? activeButtonStyle : commonDivStyle
            }
            onClick={() => handleCityButtonClick("New York")}
          >
            New York
          </Button>
        </Col>
        <Col>
          <Button
            style={
              selectedCity === "Mumbai" ? activeButtonStyle : commonDivStyle
            }
            onClick={() => handleCityButtonClick("Mumbai")}
          >
            Mumbai
          </Button>
        </Col>
        <Col>
          <Button
            style={
              selectedCity === "London" ? activeButtonStyle : commonDivStyle
            }
            onClick={() => handleCityButtonClick("London")}
          >
            London
          </Button>
        </Col>
        <Col>
          <Button
            style={
              selectedCity === "Paris" ? activeButtonStyle : commonDivStyle
            }
            onClick={() => handleCityButtonClick("Paris")}
          >
            Paris
          </Button>
        </Col>
        <Col className="offset-md-5">
          <Button
            style={{
              backgroundColor: "white",
              padding: "10px 25px 10px 25px",
              borderRadius: "50px",
              fontWeight: "bold",
              textAlign: "center",
              border: "1px solid blue",
              color: "blue",
            }}
            onClick={handleViewAllClick}
          >
            View All
          </Button>
        </Col>
      </Row>

      {hotelGroups.map((hotelGroup, index) => (
        <Row key={index} style={{ marginBottom: "40px" }}>
          {hotelGroup.map((hotel, index) => (
            <Col key={index}>
              <HotelCard hotel={hotel} />
            </Col>
          ))}
        </Row>
      ))}

      <Row>
        <Button
          onClick={handleShowMoreClick}
          style={{
            width: "200px",
            borderRadius: "50px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "30px",
            display: "block",
            padding: "10px",
          }}
        >
          <IconContext.Provider
            value={{
              className: "global-class-name",
              size: "25px",
            }}
          >
            <CgSandClock />
          </IconContext.Provider>
          Show more
        </Button>
      </Row>
    </Container>
  );
};

export default HotelList;
