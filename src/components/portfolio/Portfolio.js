import React from 'react'
import './portfolio.css'
import IMG from '../../Assets/CBDSTORE.png'
import IMG1 from '../../Assets/portfolio0.png'
import IMG2 from '../../Assets/portfolio1.jpg'
import IMG3 from '../../Assets/portfolio2.png'
import IMG4 from '../../Assets/portfolio3.jpg'
import IMG5 from '../../Assets/portfolio4.png'
import IMG6 from '../../Assets/portfolio5.jpg'




const data  =[
  {
    id:1,
    image:IMG,
    title: 'CBD E-Commerce Website',
    github:'https://github.com/Dipocbd/CBD',
    demo:'https://cbdstore.vercel.app/'
  },

  {
    id:2,
    image:IMG1,
    title: 'Tailwind-CSS Practice',
    github:'https://github.com/Dipocbd/Tailwind-CSS-Practice',
    demo:'https://tailwind-css-practice-rose.vercel.app/'
  },

  {
    id:3,
    image:IMG2,
    title: 'Rest Countries API Project',
    github:'https://github.com/Dipocbd/Rest-Countries-API',
    demo:'https://restcountriesapi-project.netlify.app/'
  },

  {
    id:4,
    image:IMG3,
    title: 'Crypto Fancy Transaction Form',
    github:'https://github.com/Dipocbd/Crypto-Transaction-Form',
    demo:'https://crypto-transaction-form.vercel.app/'
  },

  {
    id:5,
    image:IMG4,
    title: 'Furnish Project',
    github: 'https://github.com/Dipocbd/Furnish-Project',
    demo: 'https://furnishproject.netlify.app/'
  },

  {
    id:6,
    image:IMG5,
    title: 'Clipboard Landing Page',
    github:'https://github.com/Dipocbd/clipboard-Landing-Page',
    demo:'https://clipboard-dipocbd.netlify.app/'
  },
  
  {
    id:7,
    image:IMG6,
    title: 'Four Card Challenge',
    github:'https://github.com/Dipocbd/Four-Card-Frontend-Mentor-Challenge',
    demo:'https://fourcard-dipo.netlify.app/'
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