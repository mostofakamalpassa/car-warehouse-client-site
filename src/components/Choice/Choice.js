import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Choice = () => {
  return (
    <div>
      <Row>
        <h3 className="text-center fs-1 fw-bold mt-3 mb-5">Why Choose Us?</h3>
        <Col sm="7" className="d-flex align-items-center">
          <Row>
            <Col sm="6">
              <Card className="border-0">
                <Card.Img variant="top" className="img-thumbnails w-25 d-block mx-auto" src="images/icons/f1.svg" />
                <Card.Body>
                  <Card.Title className="text-center">Highly Secured</Card.Title>
                  <Card.Text>
                  Best for High Credit Limit: Platinum Secured Mastercard® from First Tech Federal Credit Union.
                  </Card.Text>
                </Card.Body>
              
              </Card>
            </Col>
            <Col sm="6">
            <Card className="border-0">
                <Card.Img variant="top"  className="img-thumbnails w-25 d-block mx-auto"  src="images/icons/f2.svg" />
                <Card.Body>
                  <Card.Title className="text-center">Trusted Agents</Card.Title>
                  <Card.Text>
                  Rusty car royalty-free images. 90,077 rusty car stock photos, vectors, and illustrations are available royalty-fre
                  </Card.Text>
                </Card.Body>
              
              </Card>
            </Col>
            <Col sm="6">
            <Card className="border-0">
                <Card.Img variant="top"  className="img-thumbnails w-25 d-block mx-auto"  src="images/icons/f3.svg" />
                <Card.Body>
                  <Card.Title className="text-center">Get an Offer</Card.Title>
                  <Card.Text>
                  Get a real offer on your car in under 2 minutes. We will buy your car even if you don't buy from us
                  </Card.Text>
                </Card.Body>
              
              </Card>
            </Col>
            <Col sm="6">
            <Card className="border-0">
                <Card.Img variant="top"  className="img-thumbnails w-25 d-block mx-auto"  src="images/icons/f4.svg" />
                <Card.Body>
                  <Card.Title className="text-center">Free Support</Card.Title>
                  <Card.Text>
                  Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.
                  </Card.Text>
                </Card.Body>
              
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm="5">
            <img className="w-100" src="images/icons/h61.jpg" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Choice;
