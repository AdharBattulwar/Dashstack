import React from 'react'
import './css/navbar.css'
import notification from '../Images/notification.svg'
import language from '../Images/language.svg'
import scroll from '../Images/scroll.svg'
import profilePhoto from '../Images/image.svg'
const navbar = () => {
  return (
    <>
      <div className='wrapperNavbar'>
        <div className='leftNavbar'>
          <div className='searchNavbar'>
            <input type='text' id='textsearchNavbar' placeholder='Search'></input>
          </div>
        </div>
        <div className='rightNavbar'>
          <div className='notificationNavbar'>
            <img src={notification} alt='notificatonicon'></img>
          </div>
          <div className='languageNavbar'>
            <div className='symbolLanguageNavbar'>
              <img src={language} alt='languageicon'></img>
            </div>
            <div className='contentLanguageNavbar'>
              <div className='maincontentLanguageNavbar'>
              ENG
              </div>
              <div className='scrollcontentLanguageNavbar'>
                <img src={scroll} alt='scrollicon'></img>
              </div>
            </div>
          </div>
          <div className='profileNavbar'>
            <div className='profilePhotoNavbar'>
            <img src={profilePhoto} alt='profilephoto'></img>
            </div>
            <div className='contentProfileNavbar'>
              <div className='namecontentProfileNavbar'>
                Adhar Battulwar
                <div className='domaincontentProfileNavbar'>
                  Admin
                </div>
              </div>
              <div className='scrollcontentProfileNavbar'>
                <img src={scroll} alt='scrollicon'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar
