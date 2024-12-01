import React from 'react'
import './css/dashboard.css'
import Boxdashboard from './components/boxdashboard'
import dashboardIcon1 from '../Images/dashboardicon1.svg'
import dashboardIcon2 from '../Images/dashboardicon2.svg'
import dashboardIcon3 from '../Images/dashboardicon3.svg'
import dashboardIcon4 from '../Images/dashboardicon4.svg'
const dashboard = () => {
  return (
    <>
    <div className='wrapperDashboard'>
      <div className='headingDashboard'>
        <h2>
          Dashboard
        </h2>
      </div>
      <div className='contentDashboard'>
        <div className='content1Dashboard'>
          <Boxdashboard heading="Add a teacher" count="40,853" imgAdd={dashboardIcon1} note="Register Asap" />
        </div>
        <div className='content2Dashboard'>
        <Boxdashboard heading="Meetings" count="40,853" imgAdd={dashboardIcon2} note="Register Asap" />
        </div>
        <div className='content3Dashboard'>
        <Boxdashboard heading="Notices" count="40,853" imgAdd={dashboardIcon3} note="Register Asap" />
        </div>
        <div className='content4Dashboard'>
        <Boxdashboard heading="TimeTable" count="40,853" imgAdd={dashboardIcon4} note="Register Asap" />
        </div>
      </div>
    </div>
    </>
  )
}

export default dashboard
