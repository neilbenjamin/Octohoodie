// LandingPage.jsimport React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//Custom Css
import "./header-style.css";
//Router
import {Link } from 'react-router-dom';
//Image
import thumbnail2 from "./sketches/kids_2.png";
//Custom css
import "./header-style.css";

function LandingPageComponent() {
  //Defining inline css
  const thumbnailStyle = {
    width: "50%",
  };
  return (
    <Container fluid>
      <Card className="text-center landing-card">
        <Card.Body>
          <Card.Title>Welcome to Octohoodie</Card.Title>
          <img
            className="product-thumbnail"
            src={thumbnail2}
            alt="sketch2"
            style={thumbnailStyle}
          />
          <Card.Text>
            Your <strong>Ultimate</strong> Beach Poncho Experience
          </Card.Text>
          <Card.Text>
            Discover our premium collection of stylish and comfortable beach
            ponchos. Whether you're lounging by the ocean or enjoying the
            sunset, Octohoodie has you covered in style.
          </Card.Text>
          <Button variant="primary" as={Link} to="/product">Shop Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default LandingPageComponent;
