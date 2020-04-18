import React, { Component } from "react";

import { UncontrolledCarousel } from "reactstrap";
import Navbar from "../../Navbars/Navbar";

import "./style.scss";
import axios from "axios";
const dateFormat = require("dateformat");

class ProductsView extends Component {
  constructor(props) {
    super(props);
    this.state = { products: { highlights: {}, downloadURLs: [] }, vendor: {} };
  }

  getProduct = () => {
    const { params } = this.props.match;
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/products/${params.id}`).then(responseFromApi => {
      this.setState({
        products: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const arrayOfImages = this.state.products.downloadURLs.map(images => {
      return {
        src: images,
        altText: "ProductImage"
      };
    });
    const date = dateFormat(this.state.products.date, "fullDate");

    return (
      <div className="container">
        <Navbar></Navbar>
        <section className="section-description">
          <h3 style={{ color: "#1eb5b2" }}>{this.state.products.name}</h3>
          <UncontrolledCarousel autoPlay={false} indicators={false} items={arrayOfImages} />
          <div className="product">
            <p>{this.state.products.description}</p>
            <h5>Host</h5>
            <p>{this.state.products.host}</p>
            <h5>When</h5>
            <p>
              {date} at {this.state.products.time}
              <br></br>
              <strong>Duration: </strong>
              {this.state.products.duration} hours
            </p>
            <h5>Where & When</h5>
            <p>
              {this.state.products.location}
              <br></br>
              <strong>Meeting Point: </strong>
              {this.state.products.meetingPoint}
            </p>
            <div className="price">
              <p>
                <strong style={{ color: "#1eb5b2" }}>Price: </strong>${this.state.products.price}
              </p>
            </div>
          </div>
        </section>
        {/* <Button style={{ backgroundColor: "#1eb5b2", borderColor: "#1eb5b2", marginBottom: "2vh" }} onClick={() => this.props.addToCart(productForCart)} Button>
          Add to Cart
        </Button> */}
      </div>
    );
  }
}

export default ProductsView;
