import React from 'react';
//import './AutoScrollLogos.css';

// Import images directly
import cognizantLogo from '../image/Google.jpg';
import accentureLogo from '../image/Ima1.jpg.png';
import adobeLogo from '../image/Images (2).jpg.png';
import infosysLogo from '../image/Images (25).jpg';
import googleLogo from'../image/Images (25).jpg';
import verizonLogo from'../image/Images (1).jpg.png';
import wiproLogo from '../image/Images (29).jpeg.jpg';
import walmartLogo from '../image/Images (3).jpg.png';
import tataLogo from '../image/Images (3).jpg.png';
import paypalLogo from '../image/images (27).jpeg.jpg';
import morganStanleyLogo from '../image/Cognizant-Logo.jpg';
import techMahindraLogo from '../image/Images (29).jpeg.jpg';

const logos = [
  cognizantLogo,
  accentureLogo,
  adobeLogo,
  infosysLogo,
  googleLogo,
  verizonLogo,
  walmartLogo,
  wiproLogo,
  tataLogo,
  paypalLogo,
  morganStanleyLogo,
  techMahindraLogo,
  // Add more logos as needed
];

const Auto = () => {
  return (
    <div  className="scroll-container">
      <div className="scroll-content">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Company Logo" className="logo" style={{height:'200px',width:'200px',borderRadius:'40px'}} />
        ))}
        {/* Duplicate the list for seamless looping */}
        {logos.map((logo, index) => (
          <img key={index + logos.length} src={logo} alt="Company Logo" className="logo" style={{height:'200px',width:'200px',borderRadius:'40px'}} />
        ))}
      </div>
    </div>
  );
};

export default Auto;
