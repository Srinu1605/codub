import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Pic from '../image/Pic.jpg'

function WelcomeCard() {
  const userName = localStorage.getItem('username'); // Replace with dynamic data if needed

  return (
    <div >
      <Card 
        className="p-4 shadow-sm" 
        style={{
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          color: '#333',
          width:'95vw',
          height:'300px',
          marginLeft:'40px',
          marginTop:'70px',
        }}
      >
        <Row className="align-items-center">
          <Col md={8}>
            <h5>
              Hi <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>{userName}</a> Welcome to Codub
            </h5>
            <h2 style={{ fontWeight: 'bold' }}>Let's Prepare, Practice and Perform!</h2>
          </Col>
          <Col md={4} className="text-center">
            <img
              src={Pic}
              alt="Welcome"
              style={{ width: '100%', height:'100%' }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default WelcomeCard;