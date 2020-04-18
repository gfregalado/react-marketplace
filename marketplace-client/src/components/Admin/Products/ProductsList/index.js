import React, { Component } from "react";
import "./style.scss";
import Navbar from "../../../Navbars/AdminNavbar";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem, Row, Col, CardHeader } from "reactstrap";
import axios from "axios";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  getProducts = () => {
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/products`).then(responseFromApi => {
      this.setState({
        products: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getProducts();
  }
  render() {
    const arrayOfProducts = this.state.products.map(products => {
      return (
        <div key={products._id}>
          <Link to={`/admin/products/lisbon/${products._id}`}>
            <ListGroupItem style={{ color: "#1eb5b2" }}>{products.name}</ListGroupItem>
          </Link>
        </div>
      );
    });

    return (
      <div>
        <Navbar></Navbar>
        <div className="container products-page">
          <Row>
            <Col sm="12">
              <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>
                <h4>Lisbon Products</h4>
              </CardHeader>

              <ListGroup className="products">{arrayOfProducts}</ListGroup>
            </Col>
          </Row>

          <Button style={{ backgroundColor: "#1eb5b2", color: "white", padding: 10, cursor: "pointer", textAlign: "center", border: "0" }} >
            <Link style={{color:"white"}}to="/admin/products/lisbon/add">Add Product</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductsList;
