//Importing requirements for component
import React from "react";
import logo from "./octoLogo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./header-style.css";
import {Link} from 'react-router-dom';



//Receiving the property from the parent component variable created in the Apps.js page.
function MainHeader(props) {
  //Schrodinger's greeting...It's both true & false at this point until someone decleares otherwise.
  //Outcome will be defined once the boolean is set..
  let greeting;

  if (props.isLoggedIn) {
    greeting = <p>Welcome Neil {props.user}!</p>;
  } else {
    greeting = <p>Please log in</p>;
  }
  return (
    <Container fluid="md" class="top-container" className="octo-header">
      <Row>
        <Col>
          <h3 >WELCOME TO OCTOHOODIE</h3>
        </Col>
        <Col as={Link} to="/">
          <img className="company-logo" src={logo} alt="Logo" />
        </Col>
        <Col>{greeting}</Col>
      </Row>
    </Container>
  );
}
export default MainHeader;
