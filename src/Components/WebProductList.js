import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

import floor from "../Logos/floor.svg";
import floorhouz from "../Logos/floorhouz.svg";
import facebook from "../Logos/facebook.svg";
import twitter from "../Logos/twitter.svg";
import apple from "../Logos/apple.svg";
import android from "../Logos/android.svg";
import { BsFillHeartFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
function WebProductList() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="product-page-brand-Name"
              src={floor}
              alt="floorhouz"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="container">
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="form">
                    {" "}
                    <i className="fa fa-search"></i>
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder="Search Product..."
                    />
                    <span className="left-pan">
                      <i className="search-btn">{<BsSearch />}</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "80px" }}
              navbarScroll
            >
              <div className="Navbar-menu">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/Shop">SHOP</Nav.Link>
                <Nav.Link href="/RequestCall">REQUEST CALL</Nav.Link>
                <Nav.Link href="/Wishlist">
                  {<BsFillHeartFill color="red" />}
                </Nav.Link>
              </div>
            </Nav>
            <div>
              <Button className="login-btn"> LOG IN</Button>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar    variant="light" className="web-Query-bar">
        <Container fluid>
        
            
            <div className="main-container">
            <div className="web-product-Rectangle">
              <span className="Query-result">
                Result For Pincode
                <div className="search-Pincode-result">12323</div>
                <Button className="pincode-btn">
                  <a href="/webProductList">Edit</a>
                </Button>{" "}
              </span>
            </div>
          </div>
         
        </Container>
      </Navbar>

      <Navbar className="Bottom-bar" fixed="bottom">
        <Container fluid>
          <div>
            <div>
              <img src={floorhouz} alt="floorhouz" />
            </div>
            <div>
              <div className="Bottom-social-icon">
                <div>
                  <img src={facebook} alt="facebook" />
                  <img
                    style={{ padding: "10px" }}
                    src={twitter}
                    alt="twitter"
                  />
                </div>
                <div>
                  <div className="Nav-Btn-Line"></div>
                </div>
                <div>
                  <img style={{ padding: "10px" }} src={apple} alt="apple" />
                  <img src={android} alt="android" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Term-policy">
              <div>Term</div>
              <div>Term of use</div>
              <div>Privacy Policy</div>
              <div>Blogs</div>
              <div>Support</div>
            </div>
            <div className="company-address">
              <span className="-Registerd-Com">
                2022 © Registerd Company Name
              </span>

              <span className="Best-viewed-on-Chrom">
                Best viewed on Chrome-58+, Firefox-54+, IE-9+, Edge-13+,
                Safari-7+, IOS-7+, Android-4.1+
              </span>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default WebProductList;
