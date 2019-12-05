import React, { Component } from 'react'
import './services.css'
import Header from '../components/ReusableComponents/header.js' 
import Hero from "../components/aboutComponent/hero.js";
import Banner from "../components/aboutComponent/banner.js";
import Footer from '../components/ReusableComponents/footer.js' 
import { Link } from 'react-router-dom'

export default class services extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Hero hero="roomsHero">
             <Banner title="OUR SERVICES & PROCESS">
            <Link to="/" className="btn-primary">
            return home
            </Link>
           </Banner>
         </Hero>
         <i className="line"> </i>
                <div className="information-container" id="services">
        <div className="inner-container">
          <h1 className="section-title">OUR SERVICES & process</h1>
          <div className="border" />
          <div className="service-container">
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-code" />
              </div>
              <div className="service-title">Website Designing</div>
              <div className="description">
              Trinetra Web Technologies is a professional web design and development services company based in Bangalore building high quality web applications.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-code" />
              </div>
              <div className="service-title">Web Development</div>
              <div className="description">
              Trinetra Web Technologies brings cutting edge technologies for all your business needs. Our goal is to help you grow in the online market space.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-code" />
              </div>
              <div className="service-title">Responsive Designs</div>
              <div className="description">
              Our responsive designs delivers outstanding results for desktop, tablet and mobile users. Get mobile compatible responsive web design services with experience in CSS3, HTML5 etc.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-object-ungroup" />
              </div>
              <div className="service-title">Website Maintenance</div>
              <div className="description">
            Website maintenance includes revising, editing and changing the existing web pages to keep your website updated with fresh content.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-cut" />
              </div>
              <div className="service-title">Website Redesign</div>
              <div className="description">
              Trinetra Web Technologies is a leading professional web designing comapany. We can build new web applications, redesign your existing website with an new look and feel and functionality with latest web technologies.
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="service-title">Ecommerce Web Development</div>
              <div className="description">
              TrinetraWebTechnologies Build Your Business Not Just a Website..
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <img src="http://connectionface.com/wp-content/uploads/2019/06/connectionface-_2_.gif" alt="Nature" className="responsive" width="600" height="400"/>
       <i className="line"> </i>
      <Footer/>
          </div>
          
        )
    }
}
