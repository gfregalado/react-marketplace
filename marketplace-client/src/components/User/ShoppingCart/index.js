import React, { Component } from "react";
import { Button } from "reactstrap";
import Navbar from "../../../components/Navbars/Navbar";
import "./style.scss";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const results = Object.keys(this.props.cart).map(key => this.props.cart[key]);
    const cartProducts = results.map(item => {
      return (
        <h3>
          <div className="product-box">
            <div className="image-box">
              <img src={item.products.downloadURLs[0]} alt="productImage" width="100%" />
            </div>
            <div className="details-box">
              <div className="title-box">
                <h3>{item.products.name}</h3>
                <p>price:${item.products.price}</p>
              </div>
            </div>
          </div>
        </h3>
      );
    });
    return (
      <div className="container">
        <Navbar></Navbar>
        <div className="cart-title">
          <h3>Your Cart</h3>
        </div>
        <div className="products-display">{cartProducts}</div>
        <Button style={{ backgroundColor: "#1eb5b2", color: "white", padding: 10, cursor: "pointer", marginTop: "2vh", textAlign: "center", border: "0" }}>Checkout</Button>
      </div>
    );
  }
}

export default Cart;
