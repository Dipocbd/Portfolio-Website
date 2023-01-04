import React from 'react'
import './portfolio.css'
import IMG from '../../Assets/portfolio0.png'
import IMG1 from '../../Assets/portfolio1.png'
import IMG2 from '../../Assets/CBDSTORE.png'
import IMG3 from '../../Assets/portfolio2.png'
import IMG4 from '../../Assets/portfolio3.png'
import IMG5 from '../../Assets/portfolio4.jpg'
import IMG6 from '../../Assets/portfolio5.png'




const data  =[
  {
    id:1,
    image:IMG,
    title: 'Rest Countries API Project',
    github:'https://updated-rest-countries-api-project.vercel.app/',
    demo:'https://updated-rest-countries-api-project.vercel.app/'
  },

  {
    id:2,
    image:IMG1,
    title: 'Product Design Portfolio',
    github:'https://github.com/Dipocbd/Product-Design-Project',
    demo:'https://product-design-project.vercel.app/'
  },

  {
    id:3,
    image:IMG2,
    title: 'CBD E-Commerce Website',
    github:'https://github.com/Dipocbd/CBD',
    demo:'https://cbdstore.vercel.app/'
  },

  

  {
    id:4,
    image:IMG3,
    title: 'Tailwind-CSS Practice',
    github:'https://github.com/Dipocbd/Tailwind-CSS-Practice',
    demo:'https://tailwind-css-practice-rose.vercel.app/'
  },

 

  {
    id:5,
    image:IMG4,
    title: 'Crypto Fancy Transaction Form',
    github:'https://github.com/Dipocbd/Crypto-Transaction-Form',
    demo:'https://crypto-transaction-form.vercel.app/'
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
    title: 'Furnish Project',
    github: 'https://github.com/Dipocbd/Furnish-Project',
    demo: 'https://furnishproject.netlify.app/'
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