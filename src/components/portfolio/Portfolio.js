import React from 'react'
import './portfolio.css'
import IMG1 from '../../Files/portfolio1.jpg'
import IMG2 from '../../Files/portfolio2.png'
import IMG3 from '../../Files/portfolio3.jpg'
import IMG4 from '../../Files/portfolio4.png'
import IMG5 from '../../Files/portfolio4.jpg'


const data  =[
  {
    id:1,
    image:IMG1,
    title: 'Rest Countries API Project',
    github:'https://github.com/Dipocbd/Rest-Countries-API',
    demo:'https://restcountriesapi-project.netlify.app/'
  },
  {
    id:1,
    image:IMG2,
    title: 'Furnish Project',
    github: 'https://github.com/Dipocbd/Furnish-Project',
    demo: 'https://furnishproject.netlify.app/'
  },
  {
    id:1,
    image:IMG3,
    title: 'Four Card Challenge',
    github:'https://github.com/Dipocbd/Four-Card-Frontend-Mentor-Challenge',
    demo:'https://fourcard-dipo.netlify.app/'
  },
  {
    id:1,
    image:IMG4,
    title: 'Crypto Fancy Transaction Form',
    github:'https://github.com/Dipocbd/Crypto-Transaction-Form',
    demo:'https://crypto-transaction-form.vercel.app/',
  },
  {
    id:1,
    image:IMG5,
    title: 'Clipboard Landing Page',
    github:'https://github.com/Dipocbd/clipboard-Landing-Page',
    demo:'https://clipboard-dipocbd.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
       
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
           return(
            <article key={id} className="portfolio_item">
         <div className="portfolio__item-image">
          <img src={image} alt={title}/>
         </div>
         <h3>{title}</h3>
         <div className='portfolio_item-cta'>
         <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
         <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
         </div>
        </article>
           )
          })
          
        }
        
      </div>


    </section>
  )
}

export default Portfolio