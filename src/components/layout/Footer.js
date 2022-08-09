import React from 'react'
import './footer.css'
import footerDevProfile from './footerDevProfile'

export default function Footer() {

  const devProfile = footerDevProfile.map(devProfile => {
    return (
      <ContactInfo contactDetails={devProfile} />
    )
  })

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__about-us'>
          <h3 className='about-us__title'>About Us</h3>
          <p className='about-us__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. 
                Fugiat pariatur maxime quis culpa 
                corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!</p>
        </div>
        <div className='footer__contact-devs'>
          {devProfile}
        </div>
      </div>
      <div className='app-rights'>
          &copy; DASHF1 All rights reserved
      </div>
    </footer>
  )
}

function ContactInfo({contactDetails, ...props}) {
  const devSocialElements = contactDetails.devSocial.map(social => {
    return (
      <li className='social-list__item'>
        <a href={social.link} className='social-list__link'>
          {social.icon}
        </a>
      </li>
    )
  })
  return (
    <div className='contact-devs__info'>
      <img className='info__avatar' src={contactDetails.devAvatar} alt=""/>
      <h4 className='info__fullname'>{contactDetails.devFullName}</h4>
      <p className='info__position'>{contactDetails.devPosition}</p>
      <ul className='info__social-list'>
        {devSocialElements}
      </ul>
    </div>
    
  )
}
