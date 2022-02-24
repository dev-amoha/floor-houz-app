import React, { useState } from "react";
import { Nav, Container, Navbar, Offcanvas, Button } from "react-bootstrap";
import floor from "../Logos/floor.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { BsSearch } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import TextField from "@mui/material/TextField";

function DashBoard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Navbar bg="light" position="top" fixed="top">
          <Container fluid>
            <>
              <MenuIcon
                sx={{ fontSize: 60 }}
                className="Menu-icon"
                onClick={handleShow}
              />

              <Offcanvas
                className="Tab-Mobile-Menu"
                show={show}
                onHide={handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <div>
                      <MenuIcon sx={{ fontSize: 30 }} className="Menu-icon" />
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="Tab-Mobile-Menu-List">
                  <Nav className="me-auto">
                    <Nav.Link className="Navlink" href="/">Home</Nav.Link>
                
                <Nav.Link className="Navlink" href="/shop">Shop</Nav.Link>
                
                <Nav.Link className="Navlink" href="/RequestCall">Request Call</Nav.Link>
               
                
                <Nav.Link className="Navlink" href="/Profile">Profile</Nav.Link>
                <Nav.Link className="Navlink" href="/logout">Log Out</Nav.Link>
              
                  </Nav>
                </Offcanvas.Body>
              </Offcanvas>
            </>
            <Navbar.Brand href="#">
              <img
                className="product-page-brand-Name"
                src={floor}
                alt="floorhouz"
              />
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <div className="Search-Bar">
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
              </Nav>
              <Nav>
                <div className="Navbar-menu">
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="/Shop">SHOP</Nav.Link>
                  <Nav.Link href="/RequestCall">REQUEST CALL</Nav.Link>
                  <Nav.Link href="/Wishlist">
                    {<BsFillHeartFill color="red" />}
                  </Nav.Link>
                </div>
              </Nav>

              <Navbar.Text>
                <Button className="Log-In-Btn">LOG IN</Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar variant="light" className="Query-bar">
          <Container fluid>
            <div>
              <div className="product-Rectangle">
                <span className="Query">
                  Please enter your PIN number to get better results
                </span>
                <TextField id="standard-basic" variant="standard" />
                <Button className="pincode-btn">
                  <a href="/webProductList">Apply</a>
                </Button>{" "}
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default DashBoard;
