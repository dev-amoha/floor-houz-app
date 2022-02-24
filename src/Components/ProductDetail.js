import React, { useState } from "react";
import {
  Container,
  Navbar,
  Button,
  Col,
  Row,
  Form,
  Card,
} from "react-bootstrap";

import DashBoard from "./DashBoard";
import floorhouz from "../Logos/floorhouz.svg";
import facebook from "../Logos/facebook.svg";
import twitter from "../Logos/twitter.svg";
import apple from "../Logos/apple.svg";
import android from "../Logos/android.svg";
import { BsFillHeartFill } from "react-icons/bs";

import ImageGallery from "react-image-gallery";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RiContactsFill } from "react-icons/ri";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function ProductDetail() {
  const [rating, setRating] = React.useState(4);
  const [value, setValue] = React.useState(0);
  const [age, setAge] = useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div>
      <DashBoard />
      <Navbar variant="light" className="web-Query-bar">
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
      <Container fluid>
        <Row>
          <Col sm={6}>
            <div style={{ display: "flex" }}>
              <a href="/">Home/</a>
              <a href="/OurProducts">Filter/</a>
              <p>ProductDetail</p>
            </div>
            <Paper className="imagecarousal">
              <ImageGallery items={images} thumbnailPosition="left" />
            </Paper>
          </Col>
          <Col className="ProductDetail-Heading" sm={4}>
            <div className="ProductDetail-Heading1">
              <p>BRAND NAME |</p>
              <div>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </div>
            </div>
            <h2>PRODUCT NAME</h2>
            <h5>Product Type Name</h5>
            <div className="ProductDetail-Heading2">
              <h5>Avilable Color</h5>
              <div className="Avilable-Color">
                <div className="Image1"></div>
                <div className="Image2"></div>
                <div className="Image3"></div>
                <div className="Image4"></div>
              </div>
            </div>
            <div className="ProductDetail-Heading3">
              <h5>Avilable Size</h5>
              <div className="Avilable-Size-Btn">
                <Button className="Avilable-Size-Btn1">12x12inch</Button>{" "}
                <Button variant="outline-info" className="Avilable-Size-Btn2">
                  24x24inch
                </Button>{" "}
                <Button variant="outline-info" className="Avilable-Size-Btn3">
                  36x36inch
                </Button>{" "}
                <Button variant="outline-info" className="Avilable-Size-Btn4">
                  48x48inch
                </Button>{" "}
              </div>
            </div>
            <div className="ProductDetail-Heading4">
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Finish
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChangeAge}
                    label="Color"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Shape
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChangeAge}
                    label="Color"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="ProductDetail-application-feature" sm={3}>
            <div>
              <h4>Application</h4>
              <div>
                <div className="Application-Box">
                  <div className="Image01"></div>
                  <div className="Image01"></div>
                  <div className="Image01"></div>
                  <div className="Image01"></div>
                </div>
              </div>
            </div>
            <div>
              <h4>Feature</h4>
              <div>
                <div className="Feature-Box">
                  <div className="Image01"></div>
                  <div className="Image01"></div>
                  <div className="Image01"></div>
                  <div className="Image01"></div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Usages" {...a11yProps(0)} />
                <Tab label="Warrenty" {...a11yProps(1)} />
                <Tab label="Manual" {...a11yProps(2)} />
                <Tab label="others" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Others
            </TabPanel>
          </Col>
          <Col className="ProductDetail-Price-box" sm={4}>
            <div>
              <h2>Rs.2500</h2>
              <div>
                <Form.Control
                  size="sm"
                  style={{ width: "40%" }}
                  type="text"
                  placeholder="Enter Pincode"
                />
              </div>
              <div>
                <span className="Get-to-know-about-av">
                  Get to know about availability at your loaction
                </span>
              </div>
              <div>
                <Button variant="outline-info" className="Avilable-Size-Btn2">
                  <span className="Add-to-wishlist">Add to wishlist</span>
                </Button>{" "}
                <Button variant="outline-info" className="Avilable-Size-Btn2">
                  <span className="Request-call">Request call</span>
                </Button>{" "}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div>
              <span className="Product-Details">Product Details</span>
            </div>
            <p className="Lorem-ipsum-dolor-si">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident
                ,sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <span className="Similar-Product">Similar Product</span>
            <div className="Similar-Product-Cards">
              <Card className="AnchorCard" style={{ width: "325px" }}>
                <Card.Img
                  variant="top"
                  src="https://www.nitco.in/assets/media/tiles/looks/main/TLI152SPI0203.jpg"
                />
                <Card.Body>
                  <div className="Card-Title">
                    <Card.Title>Product Name</Card.Title>
                    <Card.Title>Rs.2600</Card.Title>
                  </div>
                  <Card.Text>Brand Name</Card.Text>
                  <div className="Card-Description">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />

                    <div>
                      <SyncAltIcon />
                      <RiContactsFill style={{ margin: "10px" }} />
                      <BsFillHeartFill color="red" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="AnchorCard" style={{ width: "325px" }}>
                <Card.Img
                  variant="top"
                  src="https://www.nitco.in/assets/media/tiles/looks/main/TLL033MPL0304.jpg"
                />
                <Card.Body>
                  <div className="Card-Title">
                    <Card.Title>Product Name</Card.Title>
                    <Card.Title>Rs.2600</Card.Title>
                  </div>
                  <Card.Text>Brand Name</Card.Text>
                  <div className="Card-Description">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />

                    <div>
                      <SyncAltIcon />
                      <RiContactsFill style={{ margin: "10px" }} />
                      <BsFillHeartFill color="red" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="AnchorCard" style={{ width: "325px" }}>
                <Card.Img
                  variant="top"
                  src="https://www.nitco.in/assets/media/tiles/looks/main/CF017SRT0412.jpg"
                />
                <Card.Body>
                  <div className="Card-Title">
                    <Card.Title>Product Name</Card.Title>
                    <Card.Title>Rs.2600</Card.Title>
                  </div>
                  <Card.Text>Brand Name</Card.Text>
                  <div className="Card-Description">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />

                    <div>
                      <SyncAltIcon />
                      <RiContactsFill style={{ margin: "10px" }} />
                      <BsFillHeartFill color="red" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="AnchorCard" style={{ width: "325px" }}>
                <Card.Img
                  variant="top"
                  src="https://www.nitco.in/assets/media/tiles/looks/main/GP033TSL0204.jpg"
                />
                <Card.Body>
                  <div className="Card-Title">
                    <Card.Title>Product Name</Card.Title>
                    <Card.Title>Rs.2600</Card.Title>
                  </div>
                  <Card.Text>Brand Name</Card.Text>
                  <div className="Card-Description">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />

                    <div>
                      <SyncAltIcon />
                      <RiContactsFill style={{ margin: "10px" }} />
                      <BsFillHeartFill color="red" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="AnchorCard" style={{ width: "325px" }}>
                <Card.Img
                  variant="top"
                  src="https://www.nitco.in/assets/media/tiles/looks/main/TLL033MPL5104.jpg"
                />
                <Card.Body>
                  <div className="Card-Title">
                    <Card.Title>Product Name</Card.Title>
                    <Card.Title>Rs.2600</Card.Title>
                  </div>
                  <Card.Text>Brand Name</Card.Text>
                  <div className="Card-Description">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />

                    <div>
                      <SyncAltIcon />
                      <RiContactsFill style={{ margin: "10px" }} />
                      <BsFillHeartFill color="red" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      <Navbar className="Bottom-bar">
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

export default ProductDetail;
