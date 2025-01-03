import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Web from '../image/Webb.jpg'

const Cards = () => {
  return (
    <div className="my-5">
      <Row className="align-items-center shadow-sm p-4 rounded"style={{backgroundColor:'gray'}}>
        {/* Text Section */}
        <Col md={8}>
          <h3 className="fw-bold"style={{fontSize:'50px'}}>Practice</h3>
          <p>
            Curated questions at varied difficulty levels and from previous year tests,
            guided with hints, explanation videos, test cases, and solutions in a state-of-art environment.
          </p>
        </Col>
        {/* Image Section */} 
        <Col md={4}>
          <img
            src={Web}
            alt="Practice Illustration"
            style={{ width: "80%" ,borderRadius:'30px'}}
          />
        </Col>
      </Row>
      
      {/* Search Bar */}
      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search Practice"
              aria-label="Search Practice"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;