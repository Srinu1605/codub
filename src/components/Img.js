import React from 'react';
import uploadedImage from '../image/Back2.jpg.png'; 
//import Imagenot from '../image/terv.jpg'; 

const Img = () => {
  const imageStyle = {
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
    margin:10, 
    borderRadius:20,
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'start',
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '40vh',
  };

  return (
    <div style={containerStyle}>
      <img src={uploadedImage} alt="Be Future-Proof" style={imageStyle} />
      <div style={overlayStyle}>
        <h1>Empowering Education Throuth Seamless Learning Experiences</h1>
        <p>Master the skills and build your career in tech</p>
        <button style={{ padding: '10px 20px', fontSize: '1rem', background: '#1a73e8', color: '#fff', border: 'none', borderRadius: '50px' }}>
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default Img;