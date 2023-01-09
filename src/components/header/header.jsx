import React from 'react'
import CTA from './cta'
import ME from '../../assets/me.png'
import HeaderSocial from './headersocials'
import './header.css'

function header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Kevin Kipngeno</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header