import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
     <a href="#"  className='footer__logo'></a>

     <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>

     <div className='footer__socials'>
     <ul>
      <li><a href="https://www.linkedin.com/in/dipo-ojo-29957112a/" target="_blank">Linkedin</a></li>
      <li><a href="https://github.com/Dipocbd" target="_blank">Github</a></li>
      
     </ul>

     </div>
    </footer>
  )
}

export default Footer