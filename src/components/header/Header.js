import React from 'react'
import './header.css'
import CTA from '../CTA'
import image from '../../Files/IMG.jpg'
import HeaderSocials from '../HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Dipo Ojo</h1>
      <h5 className="text-light">Front-end Developer</h5>
      <CTA/>
      <HeaderSocials />
      <div className="me">
        <img src={image}alt=""/>
      </div>
       
       {/* <a href="#contact" className="scroll__down">Scroll down</a> */}
      </div>
    </header>
  )
}

export default Header