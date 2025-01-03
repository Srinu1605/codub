import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaQuestionCircle, FaCheckCircle, FaClipboardList, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Your = () => {
  return (
    <div style={{}} className="mt-4">
      <h1>Your Dashboard</h1>
      <Row className="mt-3" style={{display:'flex',justifyContent:'space-around'}}>
        <Col md={3} style={{border:'1px solid black',borderRadius:'10px',width:'20%'}}>
          <Link to= '/Practice' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaQuestionCircle size={24} color="#0056b3" />
                <Card.Title className="mt-2">5</Card.Title>
                <Card.Text>Questions Solved</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={3} style={{border:'1px solid red',borderRadius:'10px',width:'20%'}}>
          <Link to='/Practice' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaCheckCircle size={24} color="#28a745" />
                <Card.Title className="mt-2">2</Card.Title>
                <Card.Text>Practice Package Enrolled</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={3} style={{border:'1px solid green',borderRadius:'10px',width:'20%'}}>
          <Link to="/Assessments" style={{ textDecoration: 'none',  }}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaClipboardList size={24} color="#dc3545" />
                <Card.Title className="mt-2">0</Card.Title>
                <Card.Text>Assessment Pending</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={3} style={{border:'1px solid blue',borderRadius:'10px',width:'20%'}}>
          <Link to="/Assessments" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaChartLine size={24} color="#17a2b8" />
                <Card.Title className="mt-2">0%</Card.Title>
                <Card.Text>Avg Assessment Marks</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Your;