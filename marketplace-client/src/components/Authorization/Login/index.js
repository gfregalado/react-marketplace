import React, { Component } from "react";
import "./style.scss";
import { Col, Row, Form, FormGroup, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const callback = () => this.props.history.push("/");
    this.props.loginFbaseUser(email, password, callback);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  renderAuthLinks() {
    const { loggedInUser, logoutFbase } = this.props;

    if (!loggedInUser) {
      return (
        <React.Fragment>
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
                        Login
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="signupButtons container">
              <p>Don't have account?</p>
              <Button outline color="primary" style={{ borderColor: "white", fontWeight: "600" }}>
                <Link to="/signup" style={{ color: "white", fontWeight: "600" }}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container body-loggedin">
            <div className="logo" style={{marginBottom:"10vh"}}></div>
            <Button color="primary" style={{ backgroundColor: "#1eb5b2", borderColor: "#1eb5b2", fontWeight: "600", marginTop:"4vh", marginBottom:"4vh" }}>
              <Link to="/lisbon" style={{ color: "white" }}>
                Explore Marketplace
              </Link>
            </Button>
            <Button color="danger">
              <Link style={{ color: "white" }} to="/" onClick={logoutFbase}>
                Log Out
              </Link>
            </Button>
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return <nav className="nav-style">{this.renderAuthLinks()}</nav>;
  }
}

export default Login;
