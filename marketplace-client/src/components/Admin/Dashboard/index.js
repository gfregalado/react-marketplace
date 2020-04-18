import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../Navbars/AdminNavbar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <section className="header">
          <h4 style={{ textAlign: "center" }}>Lisbon Dashboard</h4>
        </section>
        <div className="shortcuts">
          <h4 style={{ textAlign: "center" }}>Coming Soon</h4>
        </div>
      </div>
    );
  }
}

export default Dashboard;
