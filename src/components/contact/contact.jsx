import React from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

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
  link: 'whatsapp://send?abid=+254790895725&text=Hello%2C%20There!',
  icon: <AiOutlineWhatsApp/>
}
]

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ysrr4zd', 'template_qa1u30a', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

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
                <div className='contact__option-icon'>{icon}</div>
                <h4>{name}</h4>
                <h5>{contact}</h5>
                <a href={link} target="_blank"> Send A Message</a>
              </article>
            )}
            )
          }
         
        </div>
        {/* ========== END OF CONTACT OPTIONS ======= */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email address' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact