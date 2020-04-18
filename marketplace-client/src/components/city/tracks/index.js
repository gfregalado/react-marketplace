import React, { Component } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import Navbar from "../../Navbars/Navbar";

import "./style.scss";
import axios from "axios";

class Tracks extends Component {
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
            <CardTitle style={{ color: "#1eb5b2", fontWeight: "600" }}>{products.name}</CardTitle>
            <CardSubtitle>60$</CardSubtitle>
          </CardBody>
        </Card>
      );
    });
    return (
      <div className="container">
        <Navbar></Navbar>
        <section className="section-description">
          <h3>Weekend Tracks</h3>
          <p>
            Every month on a Remote Year program, you have the option to opt into a Track™. A Track is a weekend experience curated by the City Team to help immerse you in the
            local culture or community while bonding with your fellow Remotes and Citizens.
          </p>
        </section>
        <div>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
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
            slidesToSlide={1}
            swipeable
          >
            {arrayOfProducts}
          </Carousel>
        </div>
        <div className="container section-description">
          <h3>Submit your tracks</h3>
        </div>
      </div>
    );
  }
}

export default Tracks;
