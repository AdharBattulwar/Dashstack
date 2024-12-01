import React from 'react'
import './css/boxdashboard.css'
const boxdashboard = (props) => {
  return (
    <>
    <div className='wrapperBoxDashboard'>
        <div className='contentBoxDashboard'>
            <div className='detialsContentBoxDashboard'>
                <div className='headingDetialsContentBoxDashboard'>
                    {props.heading}
                </div>
                <div className='countDetialsContentBoxDashboard'>
                    {props.count}
                </div>
            </div>
            <div className='iconContentBoxDashboard'>
                <img src={props.imgAdd} alt='icon'>
                </img>
            </div>
        </div>
        <div className='noteBoxDashboard'>
            {props.note}
        </div>
    </div>
    </>
  )
}

export default boxdashboard
