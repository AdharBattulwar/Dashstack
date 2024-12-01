import React from 'react'
import './css/boxstudentdetails.css'
const boxstudentdetails = (props) => {
  return (
    <>
    <div className='wrapperBoxStudentDetails'>
        <div className='studentNameBoxStudentDetails'>
            {props.studentname}
        </div>
        <div className='branchBoxStudentDetails'>
            {props.branch}
        </div>
        <div className='prnBoxStudentDetails'>
            {props.prn}
        </div>
        <div className='rollnoBoxStudentDetails'>
            {props.rollno} 
        </div>
        <div className='emailBoxStudentDetails'>
            {props.email}
        </div>
        <div className='phonenoBoxStudentDetails'>
            {props.phoneno}
        </div>
    </div>
    </>
  )
}

export default boxstudentdetails
