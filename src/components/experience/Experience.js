import React from 'react'
import './experience.css'
import{AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience">
    <h5>Skills</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Html</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle  className="experience__details-icon"/>
            <h4>Css</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Bootstrap</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Tailwind Css</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Styled Components</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Material UI</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Javascript</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>React</h4>
          </article>
          
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
        <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Node JS</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Mongo DB</h4>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <h4>Express JS</h4>
          </article>
        </div>
      </div>
    </div>


    </section>
    
    
  )
}

export default Experience