import React from 'react'
import './header.css'
import CTA from '../CTA'
import image from '../../Files/IMG.jpg'
import { IoLogoLinkedin } from 'react-icons/io'
import{GrGithub} from'react-icons/gr'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Dipo Ojo</h1>
      <h5 className="text-light">Front-end Developer</h5>
      <CTA/>
      <div className="me">
        <img src={image}alt=""/>
      </div>
      </div>
      <div className="header__socials">
    <a href="https://www.linkedin.com/in/dipo-ojo-29957112a/" target="_blank" rel="noreferrer"> <IoLogoLinkedin /></a>
    <a href="https://github.com/Dipocbd" target="_blank" rel="noreferrer"><GrGithub /></a>
    </div>
    </header>
  )
}

export default Header