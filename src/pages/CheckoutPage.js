import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, InputGroup } from "react-bootstrap";

const CheckoutPage = () => {
  const [coupon, setCoupon] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleApplyCoupon = () => {
    // Logic for applying coupon code
    console.log("Coupon Applied:", coupon);
  };

  const handleCheckout = () => {
    // Logic for payment processing
    console.log("Payment processing...");
  };

  return (
    <Container className="mt-5">
      <Row>
        <h1>Payment</h1>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Package details</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Accenture_Coder_Pro+</Card.Subtitle>
              <div className="price">
                <span className="text-muted" style={{ textDecoration: "line-through" }}>₹799.00</span>{" "}
                <span className="fw-bold text-primary">₹399.00</span>
              </div>
              <Card.Text className="mt-2">A package designed to help you crack Accenture</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Checkout Form */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Checkout details</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" defaultValue="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" defaultValue="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter your mobile number" defaultValue="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCoupon">
                  <Form.Label>Coupon Code</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Enter coupon code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <Button variant="primary" onClick={handleApplyCoupon}>
                      Apply
                    </Button>
                  </InputGroup>
                </Form.Group>
                <div className="mt-3">
                  <p>Accenture_Coder_Pro+ ₹399.00</p>
                  <p>Subtotal ₹399.00</p>
                  <p>Discount - ₹0.00</p>
                  <h5>Total ₹399.00</h5>
                </div>
                <Form.Group className="mb-3" controlId="formTerms">
                  <Form.Check
                    type="checkbox"
                    label="I read and accept the terms and conditions"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                </Form.Group>
                <Button variant="success" onClick={handleCheckout} disabled={!termsAccepted}>
                  Pay now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;