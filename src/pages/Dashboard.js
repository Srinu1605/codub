import React from 'react'
import Header from '../components/Header'
import WelcomeCard from './WelcomeCard';
import Your from './Your';
import Your1 from './Your1';

function Dashboard() {
  return (
    <div>
     <div> <Header /></div>
     <div><WelcomeCard /></div>
     <div style={{width:'90vw',marginLeft:'30px'}}><Your /></div>
     <div><Your1 /></div>
    </div>
  )
}

export default Dashboard;