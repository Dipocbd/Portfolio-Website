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
          <small>10 month Working</small>
        </article>
      
        <article className ="about__card">
          <GoFileSubmodule className='about__icon'/>
          <h5>Projects</h5>
          <small>12</small>
        </article>
      </div>
      <p>
        fiojfijaopjajfhsiojopajASCJAIJIJihioIJJVSDNDJks
        jkvdmsdnviniosnoivndidsvnionddiognmopampmpoMPhh
        
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About