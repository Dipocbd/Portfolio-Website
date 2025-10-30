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
          <small>6 Years Working</small>
        </article>
      
        <article className ="about__card">
          <GoFileSubmodule className='about__icon'/>
          <h5>Projects</h5>
          <small>12</small>
        </article>
      </div>
      <p>
  Software Engineer, CTO at{" "}
  <a
    href="https://www.trippaafrica.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Trippa Africa
  </a>
  , a fast-paced B2B SAAS Startup in Lagos.
</p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About