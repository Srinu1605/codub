import React from 'react'
import Navbar from '../components/Navbar'
import Img from '../components/Img'; 
import Auto from '../components/Auto';
import Test from './Test';
import Footer from '../components/Footer';
function Home() {
  return (
    <div >
        <div>
            <Navbar/>
        </div>
        <div style={{height:'50vh',}}>
            <Img/>
        </div>
        <div style={{display:'flex',flexDirection:'column',marginLeft:'500px',marginTop:'100px'}}><h1>#CODUB makes a difference at</h1>
        <p style={{marginLeft:'80px'}}>Tech Unicorns, Soonicorns, and MNCs..</p></div>
        <div style={{marginTop:'100px'}}>
        <Auto/>
        </div>
        <div style={{marginTop:'20px'}}>
          <Auto/>
        </div>
        <div>
        <Test/>
        </div>
        <div><Footer/></div>
        </div>
      
  );
};
 
  
export default Home;