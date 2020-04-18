import React, { Component } from "react";
import Navbar from "../../../components/Navbars/Navbar";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        User Profile
      </div>
    );
  }
}

export default UserProfile;
