import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PriceComponentkids from "./productPriceComponentKids.js";//Imports for the components used in this page.
import PriceComponentAdults from "./productPriceComponent.js"//Imports for the components used in this page.
import thumbnail1 from "./sketches/kids_1.png";
import thumbnail2 from "./sketches/kids_2.png";
import thumbnail3 from "./sketches/kids_3.png";
import thumbnail4 from "./sketches/kids_4.png";
import thumbnail5 from "./sketches/kids_5.png";
import thumbnail6 from "./sketches/kids_6.png";
//Custom css
import "./header-style.css";

//This prop is defined in the App.js page as a test and passed here into this component. 
function ProductComponent(props) {
  //Promo prop passed as a property
  const {productPromoProp} = props;
//Product pricing assigned with a value. This prop is passed to the component on the component.js page
  const productPricing = "R699,00"
  //Product pricing assigned with a value. This prop is passed to the component on the component.js page
  const productPricingKids = "R599,00"

  const thumbnailStyle = {
    width: "50%",
  };
//Components used below in JSX.
  return (
    <Container fluid="md" className="main-product-container">
      <Row>
        <Col className="d-flex justify-content-center">

        <p>{productPromoProp}</p>
          <img
            className="product-thumbnail"
            src={thumbnail1}
            alt="sketch1"
            style={thumbnailStyle}
          />
          <PriceComponentAdults productPricing={productPricing}/>
          
        </Col>
        <Col className="d-flex justify-content-center">
        <p>{productPromoProp}</p>
          <img
            className="product-thumbnail"
            src={thumbnail2}
            alt="sketch2"
            style={thumbnailStyle}
          />
          <PriceComponentAdults productPricing={productPricing}/>
        </Col>
        <Col className="d-flex justify-content-center">
        <p>{productPromoProp}</p>
          <img
            className="product-thumbnail"
            src={thumbnail3}
            alt="sketch3"
            style={thumbnailStyle}
          />
          <PriceComponentAdults productPricing={productPricing}/>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
        <p>{productPromoProp}</p>
          <img
            className="product-thumbnail"
            src={thumbnail4}
            alt="sketch1"
            style={thumbnailStyle}
          />
          <PriceComponentkids productPricingKids ={productPricingKids}/>
        </Col>
        <Col className="d-flex justify-content-center">
        <p>{productPromoProp}</p>
          <img
            className="product-thumbnail"
            src={thumbnail5}
            alt="sketch2"
            style={thumbnailStyle}
          />
          <PriceComponentkids productPricingKids ={productPricingKids}/>
        </Col>
        <Col className="d-flex justify-content-center">
        <p>{productPromoProp}</p>
          <img
            className="product-thumbnail"
            src={thumbnail6}
            alt="sketch3"
            style={thumbnailStyle}
          />
          <PriceComponentkids productPricingKids ={productPricingKids}/>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductComponent;
