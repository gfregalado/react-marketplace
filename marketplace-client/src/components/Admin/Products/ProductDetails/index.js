import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Navbars/AdminNavbar";
import { Button, CardHeader, Row, Col, CardText, UncontrolledCarousel } from "reactstrap";
import "./style.scss";
import axios from "axios";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: { highlights: {}, downloadURLs: [] }, vendor: {} };
  }

  getProduct = () => {
    const { params } = this.props.match;
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/products/${params.id}`).then(responseFromApi => {
      this.setState({
        product: responseFromApi.data
      });
    });
  };

  getVendor = () => {
    axios.get(`https://marketplace-backend-gr.herokuapp.com/api/vendors/${this.state.product.vendor}`).then(responseFromApi => {
      this.setState({
        vendor: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getProduct();
  }

  componentDidUpdate() {
    this.getVendor();
  }

  render() {
    const product = this.state.product;
    const vendor = this.state.vendor;

    const arrayOfImages = product.downloadURLs.map(images => {
      return {
        src: images,
        altText: "ProductImage"
      };
    });

    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <Row>
            <Col sm="12">
              <CardHeader style={{ backgroundColor: "#1eb5b2", color: "#fff" }}>Product Details</CardHeader>
              <CardText style={{ padding: "5%" }}>
                <UncontrolledCarousel autoPlay={false} indicators={false} items={arrayOfImages} />
                <p>
                  <strong>Name: </strong> {product.name}
                </p>
                <p>
                  <strong>Description: </strong> {product.description}
                </p>
                <p>
                  <strong>Higlights: </strong>
                  <ul>
                    <li>{product.highlights.highlight1}</li>
                    <li>{product.highlights.highlight2}</li>
                    <li>{product.highlights.highlight3}</li>
                  </ul>
                </p>
                <p>
                  <strong>Disclaimer: </strong> {product.disclaimer}
                </p>
                <p>
                  <strong>Host Description: </strong>
                </p>
                <p>
                  <strong>Location: </strong> {product.location}
                </p>
                <p>
                  <strong>Meeting Point: </strong> {product.meetingPoint}
                </p>
                <p>
                  <strong>Duration: </strong> {product.duration}
                </p>
                <p>
                  <strong>Slack Channel Link: </strong> {product.slackChannel}
                </p>
                <p>
                  <strong>Vendor: </strong>
                  <Link to={`/admin/vendors/lisbon/${product.vendor}`}> {vendor.name} </Link>
                </p>
              </CardText>
            </Col>
          </Row>

          <Button outline color="primary">
            <Link to="/admin/vendors/lisbon/add">Edit Product</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
