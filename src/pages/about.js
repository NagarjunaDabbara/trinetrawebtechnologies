import React from 'react'
import Header from '../components/ReusableComponents/header.js' 
import Hero from "../components/aboutComponent/hero.js";
import Banner from "../components/aboutComponent/banner.js";
import AboutContent from '../components/aboutComponent/aboutContent.js' 
import Team from '../components/homeComponent/team.js'
import Footer from '../components/ReusableComponents/footer.js' 
import { Link } from 'react-router-dom'

export default function about() {
    return (
        <div>
            <Header/>
            <Hero hero="roomsHero">
             <Banner title="About Us">
            <Link to="/" className="btn-primary">
            return home
            </Link>
           </Banner>
         </Hero>
            <AboutContent/>
             <Team/>
             <i className="line"> </i>
            <Footer/>
        </div>
    )
}
