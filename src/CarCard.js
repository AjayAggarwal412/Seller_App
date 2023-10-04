import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { IoPeopleOutline } from "react-icons/io5";
import { BiGasPump } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

function CarCard({ car }) {
  const {
    carImage,
    carName,
    seatingCapacity,
    mileage,
    transmissionType,
    fuelType,
    rentPerMonth,
    yearOfManufacture,
  } = car;

  return (
    <>
      <Card
        style={{
          width: "25rem",
          borderRadius: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0.4, 0.5)",
        }}
      >
        <Card.Img
          variant="top"
          src={carImage}
          alt={carName}
          style={{
            padding: "15px",
            borderRadius: "30px",
            height: "270px",
            width: "100%",
          }}
        />
        <Card.Body>
          <Card.Title>
            <Row>
              <Col style={{ fontSize: "28px" }}>{carName}</Col>
              <Col md={3}>
                <div
                  style={{
                    border: "3px dotted",
                    borderRadius: "10px",
                    padding: "3px",
                    textAlign: "center",
                  }}
                >
                  {yearOfManufacture}
                </div>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <Row style={{ marginTop: "30px" }}>
              <Col md={6}>
                <IconContext.Provider
                  value={{
                    color: "blue",
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <IoPeopleOutline style={{ margin: "10px" }} />
                </IconContext.Provider>
                {seatingCapacity} people
              </Col>
              <Col>
                <IconContext.Provider
                  value={{
                    color: "blue",
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <BiGasPump style={{ margin: "10px" }} />
                </IconContext.Provider>
                {fuelType}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <IconContext.Provider
                  value={{
                    color: "blue",
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <BsSpeedometer2 style={{ margin: "10px" }} />
                </IconContext.Provider>
                {mileage}
              </Col>
              <Col>
                <IconContext.Provider
                  value={{
                    color: "blue",
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <PiSteeringWheelDuotone style={{ margin: "10px" }} />
                </IconContext.Provider>
                {transmissionType}
              </Col>
            </Row>

            <div>
              <hr className="w-100 mt-3" />
            </div>

            <Row style={{ marginTop: "30px" }}>
              <Col style={{ fontSize: "22px", fontWeight: "bold" }}>
                {rentPerMonth}/month
              </Col>
              <Col md="auto">
                <IconContext.Provider
                  value={{
                    color: "blue",
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "lightblue",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <AiOutlineHeart />
                  </div>
                </IconContext.Provider>
              </Col>
              <Col xs lg="4">
                <Button
                  variant="primary"
                  style={{
                    borderRadius: "15px",
                  }}
                >
                  Rent Now
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CarCard;
