import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../../Navbars/AdminNavbar";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem, Row, Col, CardHeader } from "reactstrap";
import axios from "axios";

class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = { vendors: [] };
  }

  getVendors = () => {
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/vendors`).then(responseFromApi => {
      this.setState({
        vendors: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getVendors();
  }
  render() {
    const arrayOfVendors = this.state.vendors.map(vendors => {
      return (
        <div key={vendors._id}>
          <Link to={`/admin/vendors/lisbon/${vendors._id}`}>
            <ListGroupItem style={{ color: "#1eb5b2" }}>{vendors.name}</ListGroupItem>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <Navbar></Navbar>
        <div className="container vendors-page">
          <Row>
            <Col sm="12">
              <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>
                <h4>Lisbon Vendors</h4>
              </CardHeader>

              <ListGroup className="vendors">{arrayOfVendors}</ListGroup>
            </Col>
          </Row>

          <Button style={{ backgroundColor: "#1eb5b2", color: "white", padding: 10, cursor: "pointer", textAlign: "center", border: "0" }}>
            <Link style={{color:"white"}} to="/admin/vendors/lisbon/add">Add Vendor</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Vendors;
