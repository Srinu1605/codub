import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Tabs, Tab, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Your1 = () => {
  return (
    <div  className="mt-4">
      <Row >
        {/* Your Level Section */}
        <Col md={3}>
          <Card style={{width:'85vw',height:'200px',margin:'10px',marginLeft:'50px'}} className="text-center p-3 shadow-sm border-0">
            <Card.Body>
              <h5>Your Level</h5>
              <ProgressBar now={40} variant="danger" className="mb-3" style={{ height: '20px' }} />
              <h6>Beginner</h6>
              <p className="text-muted">You scored 140 points</p>
            </Card.Body>
          </Card>
          <Card  className="text-center p-3 mt-3 shadow-sm border-0" style={{ backgroundColor: '#ff7b3f',width:'40vw',height:'200px',marginLeft:'400px' }}>
            <Card.Body>
              <Card.Text className="text-white">Improve your skills by enrolling in our packages</Card.Text>
              <Link to="/Practice" style={{ textDecoration: 'none' }}>
                <Button variant="primary"><FaShoppingCart /> Buy Packages</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row style={{width:'100vw'}} >
        {/* Assessments Section */}
        <Col md={5}>
          <Card style={{width:'85vw',height:'300px',marginLeft:'200px'}}className="shadow-sm border-0">
            <Card.Header className="d-flex justify-content-between">
              <h5>Assessments</h5>
              <Tabs defaultActiveKey="pending">
                <Tab eventKey="pending" title="Pending">
                  {/* Pending assessments */}
                </Tab>
                <Tab eventKey="completed" title="Completed">
                  {/* Completed assessments */}
                </Tab>
              </Tabs>
            </Card.Header>
            <Card.Body>
              {[...Array(4)].map((_, idx) => (
                <Row key={idx} className="align-items-center mb-3">
                  <Col xs={2}>
                    <Badge pill bg="warning" text="dark">S</Badge>
                  </Col>
                  <Col xs={6}>
                    <Badge bg="success">Active</Badge>
                  </Col>
                  <Col xs={4}>
                    <Link to={'/Assessments'} style={{ textDecoration: 'none' }}>
                      <Button variant="primary">Start</Button>
                    </Link>
                  </Col>
                </Row>
              ))}
              <Link to="/Practice" style={{ textDecoration: 'none' }}>
                <Button variant="link">View More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row style={{width:'100vw'}}>
        {/* Practice Packages Section */}
        <Col md={4}>
          <Card style={{width:'85vw',height:'250px',marginLeft:'200px'}} className="shadow-sm border-0">
            <Card.Body>
              <h5>Practice Packages</h5>
              <p className="text-muted">You enrolled in 11 packages</p>
              {[...Array(4)].map((_, idx) => (
                <Row key={idx} className="align-items-center mb-3">
                  <Col xs={6}>Advanced Package</Col>
                  <Col xs={4}>
                    <ProgressBar now={Math.random() * 100} variant="success" />
                  </Col>
                  <Col xs={2}>
                    <Link to={'/Practice'} style={{ textDecoration: 'none' }}>
                      <Button variant="outline-primary" size="sm">View</Button>
                    </Link>
                  </Col>
                </Row>
              ))}
              <Link to='/Assessments' style={{ textDecoration: 'none' }}>
                <Button variant="link">View More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Your1;