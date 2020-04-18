import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class ProductsSlider extends Component {
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

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const arrayOfProducts = this.state.products.map(products => {
      return (
        <Card key={products._id} style={{ marginLeft: "2.5vw", marginRight: "2.5vw" }}>
          <CardImg top width="100%" src={products.downloadURLs[0]} alt="Card image cap" />
          <CardBody>
            <Link to={`/admin/products/lisbon/${products._id}`}>
              <CardTitle style={{ color: "#1eb5b2", fontWeight: "600", textDecoration: "underline" }}>{products.name}</CardTitle>
            </Link>
            <CardSubtitle>{products.price}$</CardSubtitle>
            <br></br>
            <Link to={`/lisbon/product/${products._id}`}>
              <Button size="sm" style={{ backgroundColor: "#1eb5b2", color: "#fff", border: "none" }}>
                Check Details
              </Button>
            </Link>
          </CardBody>
        </Card>
      );
    });

    return (
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={true}
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {arrayOfProducts}
      </Carousel>
    );
  }
}

export default ProductsSlider;
