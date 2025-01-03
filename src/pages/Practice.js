import React from 'react'
import Header from '../components/Header'
import Cards from './Cards'
import Cards1 from './Cards1'
import Foot from '../components/Foot'
function Practice() {
  return (
    <div>
      <div><Header/></div>
      <div style={{width:'90vw',marginLeft:'30px'}} ><Cards/></div>
    <div style={{width:'90vw',marginLeft:'150px'}} ><Cards1/></div>
    <div><Foot/></div>
    
    </div>
  )
}

export default Practice