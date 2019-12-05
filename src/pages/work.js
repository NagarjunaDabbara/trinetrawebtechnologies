import React from 'react'
import './work.css'
import Header from '../components/ReusableComponents/header.js' 
import Hero from "../components/aboutComponent/hero.js";
import Banner from "../components/aboutComponent/banner.js";
import Footer from '../components/ReusableComponents/footer.js' 
import { Link } from 'react-router-dom'

export default function work() {
  return (
    <div>
      <Header/>
      <Hero hero="roomsHero">
             <Banner title="Projects">
            <Link to="/" className="btn-primary">
            return home
            </Link>
           </Banner>
         </Hero>
        <h1 className="section-titles">OUR Work</h1>
        <div className="border" />
      <div className="container">
<h1 className="heading">Our top Web Design, Web Development,  <span>Digital Marketing Portfolio.</span></h1>
<div className="gallery">
  <div className="gallery-item">
    <img className="gallery-image" src="http://www.dawnnews.in/wp-content/uploads/2018/07/coming-soon-pic-GIF.gif" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
  </div>
  <div className="gallery-item">
    <img className="gallery-image" src="http://www.dawnnews.in/wp-content/uploads/2018/07/coming-soon-pic-GIF.gif" alt="sunset behind San Francisco city skyline" />
  </div>
  <div className="gallery-item">
    <img className="gallery-image" src="http://www.dawnnews.in/wp-content/uploads/2018/07/coming-soon-pic-GIF.gif" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
  </div>
  <div className="gallery-item">
    <img className="gallery-image" src="http://www.dawnnews.in/wp-content/uploads/2018/07/coming-soon-pic-GIF.gif" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
  </div>
 
</div>
</div>
<i className="line"> </i>
<Footer/>

    </div>
  )
}
