import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { IoBedOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { LiaBathSolid } from "react-icons/lia";
import { PiArrowsOutCardinalBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  return (
    <Link
      to={`/property/${hotel.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card
        style={{
          width: "25rem",
          height: "100%",
          borderRadius: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0.4, 0.5)",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "25px",
            left: "30px",
            fontSize: "20px",
            color: "blue",
            zIndex: 1,
            backgroundColor: "white",
            padding: "5px 20px 5px 20px",
            borderRadius: "50px",
          }}
        >
          For rent
        </div>

        <AiOutlineHeart
          style={{
            position: "absolute",
            top: "25px",
            right: "30px",
            fontSize: "40px",
            color: "blue",
            zIndex: 1,
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "50%",
          }}
        />
        <Card.Img
          variant="top"
          src={hotel.image}
          alt={hotel.name}
          style={{
            padding: "10px",
            borderRadius: "30px",
            height: "270px",
            width: "100%",
          }}
        />
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                <IconContext.Provider
                  value={{
                    color: "gold",
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <CiLocationOn style={{ margin: "10px" }} />
                  {hotel.location}
                </IconContext.Provider>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <Row
              style={{
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              <Col>{hotel.name}</Col>
            </Row>
            <Row>
              <Col>
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <BsBuildings style={{ margin: "10px" }} />
                  <Row>
                    <Col>{hotel.num_rooms} room</Col>
                  </Row>
                </IconContext.Provider>
              </Col>
              <Col>
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <IoBedOutline style={{ margin: "10px" }} />
                  <Row>
                    <Col>{hotel.num_beds} Bed</Col>
                  </Row>
                </IconContext.Provider>
              </Col>
              <Col>
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <LiaBathSolid style={{ margin: "10px" }} />
                  <Row>
                    <Col>{hotel.num_bathrooms} Bath</Col>
                  </Row>
                </IconContext.Provider>
              </Col>
              <Col>
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                    size: "25px",
                  }}
                >
                  <PiArrowsOutCardinalBold style={{ margin: "10px" }} />
                  <Row>
                    <Col>{hotel.area_sqft} sft</Col>
                  </Row>
                </IconContext.Provider>
              </Col>
            </Row>

            <div>
              <hr className="w-100 mt-3" />
            </div>

            <Row style={{ marginTop: "30px" }}>
              <Col style={{ fontSize: "22px", fontWeight: "bold" }}>
                ${hotel.price_per_month}/month
              </Col>

              <Col xs lg="5">
                <Button
                  variant="primary"
                  style={{
                    borderRadius: "15px",
                    padding: "15px 30px 15px 30px",
                    backgroundColor: "white",
                    color: "blue",
                    borderRadius: "25px",
                  }}
                >
                  Read more
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default HotelCard;
