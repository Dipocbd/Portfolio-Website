import React from 'react'
import './about.css'
import image from '../../Files/IMG.jpg'
import{FaAward} from 'react-icons/fa'
import{FaUsers} from 'react-icons/fa'
import{GoFileSubmodule} from 'react-icons/go'

const About = () => {
  return (
    <section id="#about">About
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
        <img src={image}alt=""/>
        </div>

      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className ="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>10 month Working</small>
        </article>
        <article className ="about__card">
          <FaUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>10</small>
        </article>
        <article className ="about__card">
          <GoFileSubmodule className='about__icon'/>
          <h5>Projects</h5>
          <small>12</small>
        </article>
      </div>
      <p>
        fiojfijaopjajfhsiojopajASCJAIJIJihioIJJVSDNDJks
        jkvdmsdnviniosnoivndidsvnionddio gnmopampmpoMP
        ASCJNKCNlmvdk
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About