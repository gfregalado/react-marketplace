import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../Navbars/Navbar";
import { FaAngleDoubleDown } from "react-icons/fa";
import ProductsTabs from "../ProductSections/index";

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Navbar></Navbar>
        <div className="banner">
          <h1>
            Lisbon <br></br>Marketplace
          </h1>
          <p>
            Our city is rich in history, beauty, and good vibes. The sun shines 290 days a year making it pleasant to enjoy at any time. Here you will find a vibrant contrast
            of tradition and innovation that creates a unique atmosphere ready to charm you at every turn!
          </p>
          <br />
          <br />
          <br />
          <p>Start plannign your month in Lisbon</p>
          <a href="#testsect">
            <FaAngleDoubleDown color="white" size="3em"></FaAngleDoubleDown>
          </a>
        </div>
        <div className="shortcuts" id="testsect">
          <h1>Find out what we have prepared for you!</h1>
          <div className="shortcuts-tracks">
            <h1>Tracks</h1>
            <p>Choose your monthly included experience or buy extra seats.</p>
          </div>
          <div className="shortcuts-experiences">
            <h1>Local Experiences</h1>
            <p>Make the most of your time in the city with this locally curated experiences.</p>
          </div>
          <div className="shortcuts-sidetrips">
            <h1>Explore Sidetrips</h1>
            <p>Take a break from the city to experience a new destination.</p>
          </div>
          <div className="shortcuts-amenities">
            <h1>Book amenities & Servicies</h1>
            <p>Make your stay in the city as comfortable as you want.</p>
          </div>
        </div>
        <div className="container">
          <ProductsTabs addToCart={this.props.addToCart}></ProductsTabs>
        </div>
      </div>
    );
  }
}

export default City;
