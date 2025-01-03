import React from 'react'
import Termsandconditions from '../pages/Termc'
import { Link } from 'react-router-dom';
import Privacy from '../pages/Privacy';
import Legal from '../pages/Legal';

function Foot() {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',width:'50%'}}>
    <div><Link to="/Termsandconditions"><h3>Termsandconditions</h3></Link></div>
    <div><Link to="/Privacy"><h3>Privacy</h3></Link></div>
    <div><Link to="/Legal"><h3>Legal</h3></Link></div>
    </div>
  )
}

export default Foot;