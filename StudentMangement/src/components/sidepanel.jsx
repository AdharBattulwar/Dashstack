import React from 'react'
import Logo from '../Images/logo.svg'
import './css/sidepanel.css'
const sidepanel = () => {
    function Buttonsidepanel(props){
        return (
            <> 
            <div className='wrapperdivButtonsidepanel'>
                <div className='designdivButtonsidepanel'></div>
                <div className='divButtonsidepanel'>{props.name}</div>
            </div>
            </>
        );
    }
  return (
    <div className='wrapperSidepanel'>
        <div className='logoSidepanel'>
            <img src={Logo} alt='logo'></img>
        </div>
        <div className='contentSidepanel'>
            <div className='maincontentSidepanel'>
                <Buttonsidepanel name="Dashboard" />
                <Buttonsidepanel name="Registration"/>
                <Buttonsidepanel name="Student" />
                <Buttonsidepanel name="Teachers" />
                <Buttonsidepanel name="Courses" />
                <Buttonsidepanel name="Notice" />
                <Buttonsidepanel name="Inbox" />
            </div>
            <div className='designcontentSidepanel'></div>
            <div className='accountcontentSidepanel'>
                <Buttonsidepanel name="Settings" />
                <Buttonsidepanel name="Account" />
                <Buttonsidepanel name="Logout" />
            </div>
        </div>
    </div>
  )
}

export default sidepanel
