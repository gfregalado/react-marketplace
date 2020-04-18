import React, { Component } from "react";
import "./style.scss";
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, CardHeader, Row, Col } from "reactstrap";
import Navbar from "../../../Navbars/AdminNavbar";
import axios from "axios";

class AddVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      accountName: "",
      iban: "",
      swift: "",
      bankAddress: "",
      bankCountry: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, email, countryCode, phoneNumber, accountName, iban, swift, bankAddress, bankCountry } = this.state;
    axios
      .post("https://marketplace-backend-gr.herokuapp.com/api/vendor", {
        name,
        email,
        countryCode,
        phoneNumber,
        accountName,
        iban,
        swift,
        bankAddress,
        bankCountry
      })
      .then(() => {
        this.props.history.push("/admin/vendors/lisbon");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>

        <div className="add-vendor-form">
          <Form onSubmit={e => this.handleFormSubmit(e)}>
            <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>Add Vendor Details</CardHeader>
            <div className="container add-vendor">
              <FormGroup>
                <Label for="name">Vendor Name*</Label>
                <Input required type="text" name="name" id="name" placeholder="This can be a person or a company" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Vendor Email</Label>
                <Input type="email" name="email" id="email" placeholder="lisbon.vendor@gmail.com" onChange={e => this.handleChange(e)} />
              </FormGroup>

              <InputGroup size="sm">
                <Label for="countryCode">Vendor Phone Number*</Label>
                <Row>
                  <Col xs={1} style={{ paddingRight: "0px" }}>
                    <InputGroupAddon addonType="prepend">+</InputGroupAddon>
                  </Col>
                  <Col xs={3} style={{ paddingRight: "5px", paddingLeft: "25px" }}>
                    <Input required type="number" name="countryCode" id="countryCode" placeholder="351" onChange={e => this.handleChange(e)} />
                  </Col>
                  <Col xs={8} style={{ paddingLeft: "0px" }}>
                    <Input required type="number" name="phoneNumber" id="phoneNumber" placeholder="916994224" onChange={e => this.handleChange(e)} />
                  </Col>
                </Row>
              </InputGroup>
            </div>

            <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>Add Payment Details</CardHeader>
            <div className="container add-vendor">
              <FormGroup>
                <Label for="name">Account Name</Label>
                <Input type="text" name="accountName" id="accountName" placeholder="The name associated to the account for payment" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">IBAN</Label>
                <Input type="text" name="iban" id="iban" placeholder="PT50 0000 0000 0000 0000 0000 00" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">SWIFT</Label>
                <Input type="text" name="swift" id="swift" placeholder="PTPR234432" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Bank Address</Label>
                <Input type="text" name="bankAddress" id="bankAddress" placeholder="Rua Augusta nº123, 1200-120, Lisboa" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="name">Bank Country</Label>
                <Input type="text" name="bankCountry" id="bankCountry" placeholder="Portugal" onChange={e => this.handleChange(e)} />
              </FormGroup>

              <Button style={{ backgroundColor: "#1eb5b2", color: "#fff", borderColor: "#1eb5b2" }}>Add Vendor</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddVendor;
