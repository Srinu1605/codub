import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Web from '../image/Web.jpg'

const Add = () => {
  return (
    <div className="my-5">
      <Row className="align-items-center shadow-sm p-4 rounded"style={{backgroundColor:'gray'}}>
        {/* Text Section */}
        <Col md={8}>
          <h3 className="fw-bold"style={{fontSize:'50px'}}>Assessments</h3>
          <p>
          Try our daily contests, hackathons, company specific mock tests. With Aptitude, Coding, Written test and 6 other modules on a single platform, we've got you covered.
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

export default Add;