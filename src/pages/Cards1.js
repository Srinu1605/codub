import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import Image from '../image/Weba.jpg';

const Cards1 = () => {
  const [activeKey, setActiveKey] = useState("all");

  const products = [
    {
      id: 1,
      title: "Accenture_Coder_Pro+",
      description: "A package designed to help you crack Accenture",
      price: 399,
      originalPrice: 799,
      discount: 50,
      type: "Premium",
      image: "/path/to/image1.jpg",
      buyNowLink: "/buy/1", // Add a link for the product
    },
    {
      id: 2,
      title: "TCS_NQT_ROUND-1_PRO",
      description: ["Traips", "Numeric", "Verbal Reasoning"],
      price: 499,
      originalPrice: 999,
      discount: 50,
      type: "Special",
      image: "/path/to/image2.jpg",
      buyNowLink: "/buy/2", // Add a link for the product
    },
  ];

  return (
    <div>
      {/* Tabs for Filter Options */}
      <div activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Nav variant="pills" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="all">All <Badge bg="success">2</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="free">Free <Badge bg="secondary">2</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="paid">Paid <Badge bg="secondary">2</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="enrolled">Enrolled <Badge bg="secondary">2</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="premium">Premium <Badge bg="secondary">2</Badge></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="public">Public <Badge bg="secondary">2</Badge></Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Card Grid */}
        <Row>
          {products.map((product) => (
            <Col md={6} lg={4} key={product.id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={Image} alt={product.title} />
                <Badge
                  bg={product.type === "Premium" ? "warning" : "danger"}
                  className="position-absolute top-0 end-0 m-2"
                >
                  {product.type}
                </Badge>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {typeof product.description === "string"
                      ? product.description
                      : product.description.map((item, index) => (
                          <span key={index}>{index + 1}. {item}<br /></span>
                        ))}
                  </Card.Text>
                  <h5>₹ {product.price} INR</h5>
                  <p className="text-muted">
                    <del>₹ {product.originalPrice} INR</del> (Save {product.discount}%)
                  </p>
                  <div className="d-flex justify-content-between">
                    {/* Use Link for navigation */}
                    <Link to='/CheckoutPage'>
                      <Button variant="primary">Buy Now</Button>
                    </Link>
                    <Button variant="outline-primary">
                      Try Now <Badge bg="success">Free</Badge>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cards1;