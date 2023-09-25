//Importing page requirements
//React
import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
//Custom css
import "./header-style.css";
//Router
import {Link} from 'react-router-dom';

function Legal() {
  return (
    <Container className="legal-container">
      <Row>
        <Col col-centered>
          <main>
            <article>
                <h3>Octohoodie Beach Poncho Surf Towel Terms and Conditions</h3>
                <p>
                  These Terms and Conditions ("T&Cs") govern the use and
                  purchase of the "Octohoodie" Beach Poncho Surf Towel
                  ("Product") from Octohoodie. By purchasing and using this
                  Product, you agree to abide by these T&Cs. Please read these
                  T&Cs carefully before making a purchase.
                </p>
              <ul>
                <li>
                  <h4>Product Description:</h4>
                  <p>
                    The Octohoodie Beach Poncho Surf Towel is designed for
                    beachgoers and surf enthusiasts. It serves as a comfortable
                    and stylish accessory for drying off and changing after a
                    day at the beach or a surf session.
                  </p>
                </li>
                <li>
                  <h4>Payment & Pricing:</h4>
                  <p>
                    Payment for the Product is due at the time of purchase.
                    Prices may be subject to change without notice.
                  </p>
                </li>
                <li>
                  <h4>Shipping & Delivery:</h4>
                  <p>
                    Octohoodie will make reasonable efforts to ensure timely
                    delivery of your Product. Shipping times and fees may vary
                    depending on your location. Octohoodie is not responsible
                    for any customs duties, taxes, or fees incurred during
                    international shipping.
                  </p>
                </li>
                <li>
                  <h4>Returns & Refunds:</h4>
                  <p>
                    If you are not satisfied with your purchase, you may return
                    the Product within 30 days of delivery for a full refund,
                    excluding shipping costs. The Product must be in its
                    original condition, unused, and with all tags and packaging
                    intact. To initiate a return, please contact our customer
                    support team.
                  </p>
                </li>
              </ul>
            </article>
          </main>
        </Col>
        <Button variant="success" as={Link} to="/">HOME</Button>{' '}
      </Row>
    </Container>
    
  );
  
}

export default Legal;
