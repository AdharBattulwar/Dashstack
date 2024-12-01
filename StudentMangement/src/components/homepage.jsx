import React from 'react'
import Sidepanel from './sidepanel'
import Navbar from './navbar'
import Dashboard from'./dashboard'
import Graph from './graph'
import StudentDetails from './studentDetails'
import './css/homepage.css'
const homepage = () => {
  return (
    <>
    <div className='wrapper'>
        <div className='leftDiv'>
          <Sidepanel/>
        </div >
        <div className='rightDiv'>
          <div className='navbarHomepage'>
            <Navbar/>
          </div>
          <div className='mainContentHomepage'>
            <Dashboard/>
            <Graph/>
            <StudentDetails/>
          </div>
        </div>
    </div>
    </>
  )
}

export default homepage
