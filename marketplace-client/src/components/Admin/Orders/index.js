import React, { Component } from "react";
import Navbar from "../../Navbars/AdminNavbar";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <h1>Orders Page</h1>
      </div>
    );
  }
}

export default Orders;
