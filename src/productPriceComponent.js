import React from "react";
import "./header-style.css";
import Badge from "react-bootstrap/Badge";

function PriceComponentAdults(props) {
  //Value from parent component passed into this componeny function as a property, which is then later used in the
  //JSX expression as a literal in the h3 tag. The initial productPricing value is define in the productComponent.js file in it's
  //productComponent component.
  const { productPricing } = props;

  return (
    <div>
      <h3>
        Spring Special <Badge bg="secondary">{productPricing}</Badge>
      </h3>
    </div>
  );
}

export default PriceComponentAdults;
