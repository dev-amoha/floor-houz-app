import React,{useState} from 'react'
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import {Col,Card,Row} from "react-bootstrap"
import Rating from "@mui/material/Rating";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { BsFillHeartFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
function Productlisting() {
     const [rating, setRating] = useState(4);
  return (
    <div>
    <Col sm={10}>
    <Paper>
     
              <div className="Product-items">
                <Row>
                  <Col>
                    <a className="AnchorCard" href="/ProductDetail">
                      <Card style={{ width: "350px" }}>
                        <Card.Img
                          variant="top"
                          src="https://www.nitco.in/assets/media/tiles/looks/main/CF017EXI1012.jpg"
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
                    </a>
                  </Col>
                  <Col>
                    <a className="AnchorCard" href="/ProductDetail">
                      <Card style={{ width: "350px" }}>
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
                    </a>
                  </Col>
                  <Col>
                    <a className="AnchorCard" href="/ProductDetail">
                      <Card style={{ width: "350px" }}>
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
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <a className="AnchorCard" href="/ProductDetail">
                      <Card style={{ width: "350px" }}>
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
                    </a>
                  </Col>
                  <Col>
                    <a className="AnchorCard" href="/ProductDetail">
                      <Card style={{ width: "350px" }}>
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
                    </a>
                  </Col>
                  <Col>
                    <Card className="AnchorCard" style={{ width: "350px" }}>
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
                  </Col>
                </Row>
              </div>
            
    


    <Paper >
    
     <Pagination
                count={10}
                color="primary"
                shape="rounded"
                size="large"
              />
    </Paper>
    </Paper>
    </Col>
    </div>
  )
}

export default Productlisting