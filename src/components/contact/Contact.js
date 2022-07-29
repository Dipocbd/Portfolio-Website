import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0jkq0vj', 'template_hfszpsl', form.current, '2CweE3Sr7O1kmc8SF')
      
    e.target.reset()
  };

  return (
    <section id ="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        
       <div className="contact__options">
       <article className="contact__option">
        <MdOutlineMailOutline className='contact__option-icon' />
        <h4>Email</h4>
        <h5>dipoojo6@gmail.com</h5>
        <a href="mailto:dipoojo6@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
       </article>

       <article className="contact__option">
        <BsWhatsapp/>
        <h4>Whatsapp</h4>
        <h5>+234</h5>
        <a href="https://wa.me/+2348100458460?" target='_blank' rel="noreferrer">Send a message</a>
       </article>
       </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea area name="message" rows="7" placeholder="Your Message" required></textarea >
          <button type="submit" className="btn btn-primary">Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact