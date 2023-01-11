import React from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

const data = [
{
  option : '1',
  name : 'Email',
  contact: 'kipngenokevin254@gmail.com',
  link: 'mailto:kipngenokevin254@gmail.com',
  icon: <AiOutlineMail/>
},
{
  option: '2',
  name: 'Instagram',
  contact: '@kipngeno.kevin',
  link: 'https://www.instagram.com/kipngeno.kevin/',
  icon: <AiOutlineInstagram/>
},
{
  option: 3,
  name: 'WhatsApp',
  contact: '0790895725' ,
  link: 'whatsapp://send?abid=+254790895725&text=Hello%2C%20World!',
  icon: <AiOutlineWhatsApp/>
}
]

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          {
            data.map(({ option, name,link, icon, contact}) => { 
              return (
              <article key={option} className='contact__option'>
                <div>{icon}</div>
                <h4>{name}</h4>
                <h5>{contact}</h5>
                <a href={link}> Send A Message</a>
              </article>
            )}
            )
          }
         
        </div>
        {/* ========== END OF CONTACT OPTIONS ======= */}
        <form action=''>

        </form>
      </div>
    </section>
  )
}

export default Contact