import React from 'react'
import Header from '../components/Header'
import Add from './Add';
import Adds from './Adds';
import Foot from '../components/Foot';
function Assessments () {
  return (
    <div>
      <div><Header/></div>
      <div style={{width:'90vw',marginLeft:'30px'}}><Add/></div>
    <div style={{width:'90vw',marginLeft:'150px'}}><Adds/></div>
    <div><Foot/></div>
    </div>
  )
}

export default Assessments;