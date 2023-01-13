import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'> Kevin Kipngeno</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href='https://www.instagram.com/kipngeno.kevin/'><BsInstagram/></a>
      <a href='https://www.facebook.com/kipngeno.kevin/'><FaFacebook/></a>
      <a href='https://www.twitter.com/kipngeno.kevin/'><BsTwitter/></a>
      <a href='https://www.linkedin.com/kipngeno.kevin/'><BsLinkedin/></a>
    </div>
    <div className='footer__copyright'>
      <small>&copy; Kipngeno Kevin all rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer