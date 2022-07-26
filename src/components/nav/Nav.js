import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBookOpen} from "react-icons/bi"
import {TbDeviceMobileMessage} from "react-icons/tb"
import {useState} from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] =useState('/')
  return (
    <nav>
      <a href="/" onClick={()=>setActiveNav('#')}className={activeNav ==="/" ? 'active': ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#')}className={activeNav ==="experience" ? 'active': ''}><BiBookOpen /></a>
      <a href="#contact"onClick={()=>setActiveNav('contact')} className={activeNav ==='#contact' ? 'active' : ''}><TbDeviceMobileMessage /></a>
    </nav>
  )
}

export default Nav