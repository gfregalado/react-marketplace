import React, { useState } from "react";
import "./style.scss";
import { TabContent, TabPane, NavLink, Row, Col, Button } from "reactstrap";
import classnames from "classnames";
import ProductSlider from "../ProductSlider";
import { Link } from "react-router-dom";
import "./style.scss";

const ProductSectionTest = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div cl>
      <div className="tabs-links">
        <NavLink
          className={classnames({ active: activeTab === "1" })}
          onClick={() => {
            toggle("1");
          }}
        >
          Tracks
        </NavLink>

        <NavLink
          className={classnames({ active: activeTab === "2" })}
          onClick={() => {
            toggle("2");
          }}
        >
          Experiences
        </NavLink>
        <NavLink
          className={classnames({ active: activeTab === "3" })}
          onClick={() => {
            toggle("3");
          }}
        >
          Sidetrips
        </NavLink>
        <NavLink
          className={classnames({ active: activeTab === "4" })}
          onClick={() => {
            toggle("4");
          }}
        >
          Amenities
        </NavLink>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tracks</h4>
              <ProductSlider endpoint="tracks"></ProductSlider>
              <Link to={`/lisbon/tracks`}>
                <Button style={{ backgroundColor: "#1eb5b2", fontWeight: "600", border: "none", margin: "4vh" }} size="lg">
                  Submit your Tracks
                </Button>
              </Link>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Local Experiences</h4>
              <ProductSlider endpoint="experiences"></ProductSlider>
              <Link to={`/lisbon/experiences`}>
                <Button style={{ backgroundColor: "#1eb5b2", fontWeight: "600", border: "none", margin: "4vh" }} size="lg">
                  Check all Experiences
                </Button>
              </Link>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Sidetrips</h4>
              <ProductSlider endpoint="sidetrips"></ProductSlider>
              <Link to={`/lisbon/sidetrips`}>
                <Button style={{ backgroundColor: "#1eb5b2", fontWeight: "600", border: "none", margin: "4vh" }} size="lg">
                  Check all Sidetrips
                </Button>
              </Link>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Amenities & Services</h4>
              <ProductSlider endpoint="amenities"></ProductSlider>
              <Link to={`/lisbon/amenities`}>
                <Button style={{ backgroundColor: "#1eb5b2", fontWeight: "600", border: "none", margin: "4vh" }} size="lg">
                  All Amenities & Services
                </Button>
              </Link>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductSectionTest;
