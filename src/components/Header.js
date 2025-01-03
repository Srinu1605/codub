import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/Pic2.png';
//import './Navbar.css'; // Import the CSS file for styles

const Header = () => {
  return (
    <nav className="navbar box">
      <div className="siva">
        <Link style={{textDecoration:'none',color:'black',}} to="/Dashboard"><h1 style={{marginLeft:'10px'}} >ORCADEHUB</h1></Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Courses">Courses</Link>
        </li>
        <li>
          <Link to="/practice">practice</Link>
        </li>
        <li>
          <Link to="/Assessments">assessments</Link>
        </li>
      </ul>
      <div className="auth-buttons " >
        <Link style={{textDecoration:'none',color:'white'}} to="/lang"><p style={{marginTop:'7px'}}>ENG</p></Link>
        <Link to="/Profile"> <img src={Image} style={{width:'50px',height:'50px'}} />
        </Link>
        
      </div>
    </nav>
  );
};

export default Header;
