import React from "react";
import { Container, Col, Row, Spinner, Nav,Card } from "react-bootstrap";
import floor from "../Logos/floor.svg";
import floorhouz from "../Logos/floorhouz.svg";
import requestcall from "../Logos/requestcall.svg";
import title from "../Logos/title.svg";
import { CgArrowRight } from "react-icons/cg";
import { ImPlus } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { AiTwotoneLike  } from "react-icons/ai";
import {  ImShare2 } from "react-icons/im";

import ShareSocial from "./ShareSocial";

function Homepage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Container fluid style={{ display: "flex" }}>
        <Col sm={2}>
          <Row>
            <div className="Rectangle-2">
              <img src={floorhouz} alt="floorhouz" className="FloorHouz" />

              <div className="Navigation-Btn-1">
                <div>01</div>
                <Nav.Link className="Navlink" href="/">Homepage</Nav.Link>
                <div>02</div>
                <Nav.Link className="Navlink" href="/OurProductData">Our Products</Nav.Link>
                <div>03</div>
                <Nav.Link className="Navlink" href="/PopularProducts">Popular Products</Nav.Link>
              </div>
              <div className="Line"></div>

              <div className="Navigation-Btn-2">
                <div>04</div>
                <Nav.Link className="Navlink" href="/Brands">Brands</Nav.Link>
                <div>05</div>
                <Nav.Link className="Navlink" href="/HowWework">How we Work</Nav.Link>
              </div>
            </div>
          </Row>
          <Row>
            <div className="Rectangle-2-Copy">
              <span className="Request-Call">
                <img src={requestcall} alt="request call" />
              </span>
              <div className="requestcall-icon">
                <a href="/RequestCall">
                  <CgArrowRight />
                </a>
              </div>
            </div>
          </Row>
          <Row>
            <div className="cheapest_discount_hardwood_flooring_near_me_los_angeles">
              {/*<div className="spinner">
                <Spinner animation="border" variant="primary" size="lg" />
                <div>
                  <ImPlus size={20} style={{ color: "white" }} />
                </div>
                   </div>*/}
            </div>
          </Row>
        </Col>

        <Col sm={6}>
          <Row>
            <div className="white-bg">
              {/*<img alt='floorhouz' src={require("./img/floor-houz.png")}
        srcSet="./img/floor-houz@2x.png 2x,./img/floor-houz@3x.png 3x"
        className="FloorHouz"/>*/}
              <div className="BrandName">
                <img
                  alt="floorhouz"
                  src={floor}
                  className="FloorHouz-brand"
                ></img>

                <span class="sub-title">Better floor Better Living</span>
              </div>
            </div>
          </Row>
          <Row>
            <div className="hero">
              <div className="title-1">
                <span className="title">
                  Flooring Made<span className="text-style-1">Easy</span>
                </span>
                <ShareSocial
                  modalShow={modalShow}
                  setModalShow={setModalShow}
                />
              </div>
              <div></div>
            </div>
          </Row>
        </Col>

        <Col sm={4}>
          <Row>
            <div className="types-of-flooring-hero-A">
              <div className="socialIcon">
                <span className="search-icon">
                  <FaSearch />
                </span>
                <a href="https://www.facebook.com" className="FacebookCopy">
                  Facebook
                </a>
                <a href="https://www.instagram.com" className="InstagramCopy">
                  Instagram
                </a>
                <a href="https://www.twitter.com" className="TwitterCopy">
                  Twitter
                </a>
              </div>

              <div className="platForm-box">
                <span className="platForm">Unique Platform for all</span>

                <div className="Left-Right-Arrow">
                  <IoIosArrowDropleft size={30} />
                  <IoIosArrowDroprightCircle
                    size={30}
                    style={{ color: "white", marginLeft: "20px" }}
                  />
                </div>
              </div>
            </div>
          </Row>
          <Row sm={1} style={{ display: "flex" }}>
            <div className="black-bg">
              <div>
                <Card className="Card1">
                  <Card.Header>Quote</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.{" "}
                      </p>

                      <footer className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                       
                       <div className="QuoteLike">
                       <div>
                       <AiTwotoneLike/>
                       674
                       </div>
                        
                        <div>
                        <ImShare2/>
                        </div> 
                       </div> 
                       
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </div>
            {/*  <div className="white-bg-bottom">
            <div className="white-bg-bottom-top">
            <span className="Please-enter-your-PI">
              Please enter your PIN code,
              So we can provide better result accordingly.
            </span>
      </div>
            </div>*/}
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Homepage;
