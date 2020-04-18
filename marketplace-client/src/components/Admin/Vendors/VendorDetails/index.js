import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../../Navbars/AdminNavbar";
import { Link } from "react-router-dom";
import { Button, CardHeader, CardText, Row, Col } from "reactstrap";
import axios from "axios";

class VendorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { vendor: { contact: {}, payment: {} } };
  }

  getVendor = () => {
    const { params } = this.props.match;
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/vendors/${params.id}`).then(responseFromApi => {
      this.setState({
        vendor: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getVendor();
  }

  render() {
    const vendor = this.state.vendor;
    return (
      <div>
        <Navbar></Navbar>
        <div className="container vendors-page">
          <Row>
            <Col sm="12">
              <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>Vendor Details</CardHeader>
              <CardText style={{ padding: "5%" }}>
                <p>
                  <strong>Name: </strong> {vendor.name}
                </p>
                <p>
                  <strong>Phone Number: </strong>+{vendor.contact.countryCode} {vendor.contact.phoneNumber}
                </p>
                <p>
                  <strong>Email: </strong>
                  {vendor.contact.email}
                </p>
              </CardText>
              <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>Payment Details</CardHeader>
              <CardText style={{ padding: "5%" }}>
                <p>
                  <strong>Account Name: </strong>
                  {vendor.payment.accountName}
                </p>
                <p>
                  <strong>IBAN: </strong>
                  {vendor.payment.iban}
                </p>
                <p>
                  <strong>SWIFT: </strong>
                  {vendor.payment.swift}
                </p>
                <p>
                  <strong>Bank Address: </strong>
                  {vendor.payment.bankAddress}
                </p>
                <p>
                  <strong>Bank Country: </strong>
                  {vendor.payment.bankCountry}
                </p>
              </CardText>
            </Col>
          </Row>

          <Button outline color="primary">
            <Link to="/admin/vendors/lisbon/add">Edit Vendor</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default VendorDetails;
