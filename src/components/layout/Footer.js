import React from 'react'
import ahsanAvatar from './images/ahsan-avatar.png'
import jdAvatar from './images/jahidul-punjabi-avatar.png'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brand from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        
        <div className='footer__about-us'>
          <h3 className='about-us__title'>About Us</h3>
          <p className='about-us__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. 
                Fugiat pariatur maxime quis culpa 
                corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!</p>
        </div>
        <ContactInfo></ContactInfo>
      </div>
      <div className='app-rights'>
          &copy; DASHF1 All rights reserved
      </div>
    </footer>
  )
}

function ContactInfo() {
  return (
    <div className='footer__contact-devs'>
      <div className='contact-devs__info'>
        <img className='info__avatar' src={ahsanAvatar} alt=""/>
        <h4 className='info__fullname'>Ahsanulnas</h4>
        <p className='info__position'>Full Stack Developer</p>
        <ul className='info__social-list'>
          <li className='social-list__item'>
            <a href="/" className='social-list__link'>
              <FontAwesomeIcon icon={Brand.faGithub} />
            </a>
          </li>
          <li className='social-list__item'>
            <a href="/" className='social-list__link'>
              <FontAwesomeIcon icon={Brand.faLinkedinIn} />
            </a>
          </li>
          <li className='social-list__item'>
            <a href="/" className='social-list__link'>
              <FontAwesomeIcon icon={Brand.faCodepen} />
            </a>
          </li>
        </ul>
      </div>
      <div className='contact-devs__info'>
        <img className='info__avatar' src={jdAvatar} alt=""/>
        <h4 className='info__fullname'>Ahsanulnas</h4>
        <p className='info__position'>Full Stack Developer</p>
        <ul className='info__social-list'>
          <li className='social-list__item'>
            <a href="/" className='social-list__link'>
              <FontAwesomeIcon icon={Brand.faGithub} />
            </a>
          </li>
          <li className='social-list__item'>
            <a href="/" className='social-list__link'>
              <FontAwesomeIcon icon={Brand.faLinkedinIn} />
            </a>
          </li>
          <li className='social-list__item'>
            <a href="/" className='social-list__link'>
              <FontAwesomeIcon icon={Brand.faCodepen} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
