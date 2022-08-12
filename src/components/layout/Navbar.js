import React from 'react'
import logo from './images/dash-f1-logo-3.png'
import './navbar.css'

export default function Navbar() {

  function handleNav() {
    document.body.classList.toggle("nav-open")
  }

  return (
    <header>
        <img src={logo} alt="" className='logo' />
        <button  
          class="nav-toggle" 
          aria-label="toggle navigation"
          onClick={handleNav}
        >
          <span class="hamburger"></span>
        </button>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'><a href="\" className='nav__link'>Home</a></li>
            <li className='nav__item'><a href="\driver" className='nav__link'>Driver</a></li>
            <li className='nav__item'><a href="\schedule" className='nav__link'>Schedule</a></li>
          </ul>
        </nav>    
    </header>
  )
}
