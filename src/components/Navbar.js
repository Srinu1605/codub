import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar box">
      <div className="siva">
        <Link to="/"><h1 style={{textDecoration:'none',color:'black',marginLeft:'10px'}}>ORCADEHUB</h1></Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/courses">courses</Link>
        </li>
        <li>
        <div>
      <Button onClick={() => setShow(true)}>Bootcamp</Button>
      <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Bootcamp Alert</Alert.Heading>
        <p>
          This is a success alert—check it out! You can add more details about the bootcamp here.
        </p>
      </Alert>
    </div>
        </li>
        <li>
          
        </li>
      </ul>
      <div className="auth-buttons">
        <Link style={{textDecoration:'none',color:'white',marginLeft:'10px'}} to="/lang">Eng</Link>
        <Link to="/login">
          <button className="auth-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="auth-button">Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
