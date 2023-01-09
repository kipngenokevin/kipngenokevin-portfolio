import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs' 


const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kipngenokevin254/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/kipngenokevin' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/kipngeno.kevin/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headersocials