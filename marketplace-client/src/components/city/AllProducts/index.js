import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, Button, CardImg, CardTitle, CardBody, CardSubtitle, Badge } from "reactstrap";
import Navbar from "../../Navbars/Navbar";

import "./style.scss";
import axios from "axios";

class ProductsView extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  getProducts = () => {
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/${this.props.endpoint}`).then(responseFromApi => {
      this.setState({
        products: responseFromApi.data
      });
    });
  };

  // AddToCart = (productID, user) => {
  //   axios
  //     .post(`https://marketplace-backend-gr.herokuapp.com/api/addtocart/${productID}`, { user })
  //     .then(() => {
  //       console.log("product added to the cart");
  //     })
  //     .catch(error => console.log(error));
  // };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const arrayOfProducts = this.state.products.map(products => {
      return (
        <Card key={products._id} style={{ marginLeft: "2.5vw", marginRight: "2.5vw", marginTop: "1.5vh", marginBottom: "1.5vh" }}>
          <CardImg top width="100%" src={products.downloadURLs[0]} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{ color: "#1eb5b2", fontWeight: "600", textAlign: "center" }}>{products.name}</CardTitle>
            <CardSubtitle style={{ textAlign: "center" }}>Price: {products.price}$</CardSubtitle>
            <div className="card-buttons">
              <Button size="sm" style={{ backgroundColor: "#1eb5b2", borderColor: "#1eb5b2" }} onClick={() => this.props.addToCart({ products })} Button>
                Add to Cart
              </Button>
              <Link to={`/lisbon/product/${products._id}`}>
                <Button size="sm" style={{ backgroundColor: "#1eb5b2", borderColor: "#1eb5b2" }} Button>
                  Check Details
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      );
    });
    return (
      <div className="container">
        <Navbar></Navbar>
        <section className="section-description">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </section>

        <div className="container">{arrayOfProducts}</div>
      </div>
    );
  }
}

export default ProductsView;
