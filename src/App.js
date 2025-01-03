import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import "./App.css"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Practice from './pages/Practice'
import Assessments from './pages/Assessments'
import Termsandconditions from './pages/Termc'
import Privacy from './pages/Privacy'
import Legal from './pages/Legal'
import Courses from './pages/Courses'
import CheckoutPage from './pages/CheckoutPage'
import Profile from './pages/Profile'




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/Dashboard' element={<Dashboard/>}/>
          <Route exact path='/Practice' element={<Practice/>}/>
          <Route exact path='/Assessments' element={<Assessments/>}/>
          <Route exact path='/Termsandconditions' element={<Termsandconditions/>}/>
          <Route exact path='/Privacy' element={<Privacy/>}/>
          <Route exact path='/Legal' element={<Legal/>}/>
          <Route exact path='/Courses' element={<Courses/>}/>
          <Route exact path='/CheckoutPage' element={<CheckoutPage/>}/>
          <Route exact path='/Profile' element={<Profile/>}/>
          
          

        </Routes>
      </Router>
    </div>
  )
}

export default App