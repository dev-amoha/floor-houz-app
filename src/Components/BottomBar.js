import React, { useState } from "react";
import { Container, Navbar, Offcanvas, Button, Col } from "react-bootstrap";
import floorhouz from "../Logos/floorhouz.svg";
import facebook from "../Logos/facebook.svg";
import twitter from "../Logos/twitter.svg";
import apple from "../Logos/apple.svg";
import android from "../Logos/android.svg";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function BottomBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const [age, setAge] = useState("");


     const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="Filter-Bottom-bar">
        <Navbar
          position="bottom"
          fixed="bottom"
          expand="lg"
          variant="light"
          bg="light"
        >
          <Container fluid>
            <Col sm={6}>
              <div className="d-grid gap-2">
                <>
                  <Button
                    className="Bottom-Filter-by-btn"
                    variant="outline-info"
                    onClick={handleShow}
                    size="lg"
                  >
                    FILTER BY
                  </Button>
                  <Offcanvas
                    placement="bottom"
                    show={show}
                    onHide={handleClose}
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>FILTER BY</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                     <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChangeAge}
                  label="Categories"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
                    </Offcanvas.Body>
                  </Offcanvas>
                </>
              </div>
            </Col>
            <Col sm={6}>
              <div className="d-grid gap-2">
                <>
                  <Button
                    className="Bottom-Short-by-btn"
                    variant="outline-info"
                    onClick={handleShow}
                    size="lg"
                  >
                    SHORT BY
                  </Button>
                  <Offcanvas
                    placement="bottom"
                    show={show}
                    onHide={handleClose}
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>SHORT BY</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                     
                    </Offcanvas.Body>
                  </Offcanvas>
                </>
              </div>
            </Col>
          </Container>
        </Navbar>
      </div>
      <div className="DashBoard-Bottom-Bar">
        <Navbar className="Bottom-bar" position="bottom">
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
    </div>
  );
}

export default BottomBar;
