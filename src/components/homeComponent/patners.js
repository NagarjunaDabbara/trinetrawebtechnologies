import React, { Component } from 'react'
import './patners.css'
import uniqon from '../assets/uniqon.png'
import annadatastore from '../assets/annadatastore.jpg'
import ananya from '../assets/ananyaengneers.PNG'
import dj from '../assets/dj.jpg'
import Content from './content.js'

export default class 
 extends Component {
    render() {
        return (
            <div>
                <section className="banner_bottom py-sm-5 py-4">
        <div className="container py-lg-3">
          <div className="row text-center">
            <div className="col-md-4 how-icon mt-md-0">
              <div className="shadow">
                <div className="grid1-bg">
                </div>
                <span className="fa fa-eye" aria-hidden="true" />
                <div className=" how-grid">
                  <h3 className="mt-3">Research & Plan</h3>
                  <h5>We Understand User Requirement</h5>
                  <strong> <p  className="mt-3">A thorough research is carried out based on the requirements and strategies are planned according to those!</p></strong>
                </div>
              </div>
            </div>
            <div className="col-md-4 how-icon1 mt-md-0 mt-4">
              <div className="shadow">
                <div className="grid1-bg1">
                </div>
                <span className="fa fa-code" aria-hidden="true" />
                <div className="how-grid">
                  <h3 className="mt-3">Design & Develop </h3>
                  <h5>We Craft Based On The Requirement</h5>
                  <strong> <p className="mt-3">Our creative designing and developing team takes the full responsibility and gives you a creative outcome!</p></strong>
                </div>
              </div>
            </div>
            <div className="col-md-4 how-icon2 mt-md-0 mt-4">
              <div className="shadow">
                <div className="grid1-bg2">
                </div>
                <span className="fa fa-code" aria-hidden="true" />
                <div className="how-grid">
                  <h3 className="mt-3">Test & Delivery</h3>
                  <h5>We Deliver A Fruit Full Product</h5>
                  <strong><p className="mt-3">The outcome is tested for errors by our team and the fruitful product will be delivered to you!</p></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Content/>
           <section className="clients py-5" id="testi">
        <div className="container py-xl-5 py-lg-3">
          <div className="row pb-4">
            <div className="col-lg-6 about-left">
              <h1 className="heading mb-4">Words
From Our Trusted
Customers.</h1>
             
            </div>
            <div className="col-lg-6 csslider infinity" id="slider1">
              <input type="radio" name="slides" defaultChecked="checked" id="slides_1" />
              <input type="radio" name="slides" id="slides_2" />
              <input type="radio" name="slides" id="slides_3" />
              <input type="radio" name="slides" id="slides_4" />
              <ul className="banner_slide_bg">
                <li>
                  <div className="feedback-top">
                    <p><span className="fa fa-quote-left" />I'm so happy to support Trinetra Web Technologies because there you can surely get a professional way of designing and bulk of knowledge by MR.Raghunath who has 15+years of experience.Just go for it that to fee also afforadable by anyone.</p>
                    <div className="row">
                      <div className="col-3 pr-0">
                      </div>
                      <div className="col-9 pl-0">
                        <h4 className="mt-sm-5 mt-4">Amarnath.y</h4>
                        <p>Ananya Engineers</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feedback-top">
                    <p><span className="fa fa-quote-left" />Smart work by Trinetra Web Technologies they redesigned my old website thanks to Trinetra I didn't expect this much work from Trinetra so I suggest anybody who are going to redesign your website you can go with Trinetra Web Technologies.</p>
                    <div className="row">
                      <div className="col-3 pr-0">
                      </div>
                      <div className="col-9 pl-0">
                        <h4 className="mt-sm-5 mt-4">Manmohan</h4>
                        <p>UNIQON CONSULTING LIMITED</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feedback-top">
                    <p><span className="fa fa-quote-left" />I'm so happy to support Trinetra Web Technologies because there you can surely get a professional way of designing and bulk of knowledge by MR.Raghunath who has 15+years of experience.Just go for it that to fee also afforadable by anyone.</p>
                    <div className="row">
                      <div className="col-3 pr-0">
                      </div>
                      <div className="col-9 pl-0">
                        <h4 className="mt-sm-5 mt-4">Amarnath.y</h4>
                        <p>Ananya Engineers</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="feedback-top">
                    <p><span className="fa fa-quote-left" />Smart work by Trinetra Web Technologies they redesigned my old website thanks to Trinetra I didn't expect this much work from Trinetra so I suggest anybody who are going to redesign your website you can go with Trinetra Web Technologies.</p>
                    <div className="row">
                      <div className="col-3 pr-0">
                      </div>
                      <div className="col-9 pl-0">
                        <h4 className="mt-sm-5 mt-4">Manmohan</h4>
                        <p>UNIQON CONSULTING LIMITED</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="navigation">
                <div>
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                  <label htmlFor="slides_4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            </div>
        )
    }
}
