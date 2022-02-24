import React from "react";
import DashBoard from "./DashBoard";
import FilterBar from "./FilterBar";
import BottomBar from "./BottomBar";
import Productlisting from "./Productlisting";
import { Row, Col } from "react-bootstrap";
function OurProductData() {
  return (
    <div>
      <DashBoard />
      <Row>
        <Col sm={2}>
          <FilterBar />
        </Col>
        <Col>
          <Productlisting />
        </Col>
      </Row>
      <BottomBar />
    </div>
  );
}

export default OurProductData;
