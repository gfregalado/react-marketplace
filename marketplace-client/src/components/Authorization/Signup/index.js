import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, FormGroup, Button, Input } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const callback = () => this.props.history.push("/createuser");
    this.props.createNewFbaseUser(email, password, callback);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container body">
        <div className="logo"></div>
        <div className="login-form container">
          <Form onSubmit={e => this.handleFormSubmit(e)}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" value={this.state.username} onChange={e => this.handleChange(e)} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={e => this.handleChange(e)} />
                </FormGroup>
                <div className="login-button">
                  <Button outline style={{ borderColor: "white", fontWeight: "600", color: "white", width: "100%" }}>
                    Signup
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="signupButtons container">
          <p>Already have an account?</p>
          <Button outline color="primary" style={{ borderColor: "white", fontWeight: "600" }}>
            <Link to="/" style={{ color: "white", fontWeight: "600" }}>
              Login
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Signup;
