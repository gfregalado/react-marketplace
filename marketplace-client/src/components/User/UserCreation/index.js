import React, { Component } from "react";
import Navbar from "../../../components/Navbars/Navbar";
import { Form, FormGroup, Label, Input, CardHeader, Row, Col, InputGroup, InputGroupAddon, Badge, Button } from "reactstrap";
import "./style.scss";

class UserCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      slackHandle: "",
      countryCode: "",
      phoneNumber: "",
      date: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="profile-body">
          <div className="container profile-background">
            <Form onSubmit={e => this.handleFormSubmit(e)}>
              <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff", textAlign: "center", fontWeight: "600", fontSize: "1.3em" }}>Create your Profile</CardHeader>
              <div className="user-avatar">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/marketplace-commerce.appspot.com/o/images%2Fimage-banner-edited.jpg?alt=media&token=9845d4a8-9e4c-41c6-9cd5-8cf6ce7b55ad"
                  alt="profileAvatar"
                ></img>
              </div>
              <div className="avatar-edit-button">
                <Badge style={{ backgroundColor: "#1eb5b2" }} pill>
                  Update Picture
                </Badge>
              </div>
              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <Label for="name">First Name</Label>
                    <Input required type="text" name="firstName" id="name" placeholder="John" onChange={e => this.handleChange(e)} />
                  </FormGroup>
                </Col>
                <Col xs={6}>
                  <FormGroup>
                    <Label for="exampleSelect">Last Name</Label>
                    <Input required type="text" name="name" id="name" placeholder="Snow" onChange={e => this.handleChange(e)} />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleSelect">Slack Handle</Label>
                <Input required type="text" name="slackHandle" id="name" placeholder="@JohnSnow" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <InputGroup size="sm">
                <Label for="exampleSelect">Whatsapp Number</Label>
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
              <br></br>
              <FormGroup>
                <Label for="exampleDate">Birthday</Label>
                <Input required type="date" name="date" id="Date" placeholder="Select Date" onChange={e => this.handleChange(e)} />
              </FormGroup>
            </Form>
            <Button style={{ backgroundColor: "#1eb5b2", color: "white", padding: 10, cursor: "pointer", textAlign: "center", border: "0" }}>Update User</Button>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCreation;
