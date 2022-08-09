import React from 'react'
import './about.css'
import{FaAward} from 'react-icons/fa'
import{GoFileSubmodule} from 'react-icons/go'

const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">

      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className ="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1 Year Working</small>
        </article>
      
        <article className ="about__card">
          <GoFileSubmodule className='about__icon'/>
          <h5>Projects</h5>
          <small>12</small>
        </article>
      </div>
      <p>
        I am an experienced Frontend Developer in search of long term contract positions or full time in a fast paced organization 
        that will allow me to learn more and also to contribute to the to the success of the organization
        I have experience in creating scalable web applications with attention to design details.
        I have a Bachelors Degree in Law.
        
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About