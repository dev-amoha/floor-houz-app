import React, { useState } from "react";
import { Container, Button, Row, Card, Col, Form } from "react-bootstrap";
import DashBoard from "./DashBoard";

import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";

import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function RequestCall() {
  const [rating, setRating] = useState(4);
  const [validated, setValidated] = useState(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <DashBoard />
      <Container>
        <Row>
          <Col sm={3}>
            <Card className="request-Card" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.nitco.in/assets/media/tiles/looks/main/GP033TSL0204.jpg"
              />
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="request-Card-details" style={{ width: "18rem" }}>
              <div>
                <h2>Product Name</h2>
                <p className="Request-Card-Brand">Brand Name</p>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </div>
              <div className="request-Card-Price">
                <h3>Rs 2600</h3>
              </div>
            </Card>
          </Col>
          <Col sm={6}>
            <Paper className="request-call-form">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="form-Row1">
                  <Col>
                    <Form.Group
                      className="request-call-input-box"
                      md="4"
                      controlId="validationCustom01"
                    >
                      <Form.Label>First name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="request-call-input-box"
                      md="4"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Last name*</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="Form-Row2">
                  <Col>
                    <FormControl
                      className="request-call-input-box"
                      sx={{ m: 2, minWidth: 300 }}
                    >
                      <Form.Label>Country*</Form.Label>

                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Country"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      <FormHelperText>Please Select Country</FormHelperText>
                    </FormControl>
                  </Col>
                  <Col>
                    <Form.Group
                      className="request-call-input-box"
                      md="4"
                      controlId="validationCustom03"
                    >
                      <Form.Label>Town/City*</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Town/city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="Form-Row3">
                  <Form.Group
                    as={Col}
                    className="request-call-input-box"
                    md="5"
                    controlId="validationCustom04"
                  >
                    <Form.Label>PostCode*</Form.Label>
                    <Form.Control type="text" placeholder="PostCode" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid PostCode.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="Form-Row4">
                  <Form.Group
                    className="request-call-input-box"
                    as={Col}
                    md="11"
                    controlId="validationCustom05"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="Form-Row3">
                  <Col>
                    <Form.Group
                      className="request-call-input-box"
                      md="6"
                      controlId="validationCustom04"
                    >
                      <Form.Label>Email-Address*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email-Address"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email-Address.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      className="request-call-input-box"
                      md="6"
                      controlId="validationCustom04"
                    >
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Phone"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Phone.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-6">
                  <Form.Check
                    className="request-call-input-box"
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Row className="Request-submit">
                  <Col>*Required</Col>
                  <Col>
                    <Button
                      type="submit"
                      variant="outline-info"
                      className="requestCall-Size-Btn3"
                    >
                      Request Call
                    </Button>{" "}
                  </Col>
                </Row>
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RequestCall;
