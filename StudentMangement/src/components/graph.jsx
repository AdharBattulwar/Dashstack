import React from 'react'
import './css/graph.css'
import scroll from '../Images/scroll.svg'
import Graphimg from '../Images/graph.svg'
import Graphlineimg from '../Images/graphlines.svg'
const graph = () => {
  return (
    <>
    <div className='wrapperGraph'>
        <div className='contentGraph'>
            <div className='headingContentGraph'>
                <div className='mainHeadingContentGraph'>
                    Student Enrolled In Courses
                </div>
                <div className='monthHeadingContentGraph'>
                    <div className='designMonthHeadingContentGraph'>
                        <div className='nameMonthHeadingContentGraph'>
                            October
                        </div>
                        <div className='iconMonthHeadingContentGraph'>
                            <img src={scroll} alt='iconArrow'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='graphcontentGraph'>
                <img src={Graphimg} alt='img'></img>
                <img src={Graphlineimg} alt='img'></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default graph
