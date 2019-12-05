import React, { Component } from "react";
import "./team.css";
import arjun from "../assets/arjun.jpg";
import raghunath from "../assets/raghunath.jpg";
import shiva from "../assets/shiva.jpg";

export default class team extends Component {
  render() {
    return (
      <div>
        {/* \\ Begin Container \\ */}

        <div id="Container">
          <h1 className="section-titles">Meet Our Experts</h1>
          <div className="borders" />
          <h1 className="section-titles">
            We help you generate high-quality online sales by implementing
            highly structured, persuasive Internet marketing campaigns.
          </h1>
          {/* \\ Begin Middle Section \\ */}
          <div className="Middle_sec" id="About">
            <div className="Center">
              <div id="Leftside">
                <div className="Client">
                  <figure>
                    <a href="#">
                      <img src={arjun} alt="Client 0" className="img-rounded" />
                    </a>
                  </figure>
                  <h3>Nagarjuna</h3>
                </div>
                <div className="Client1">
                  <figure>
                    <a href="#">
                      <img src={raghunath} alt="Client 1" />
                    </a>
                  </figure>
                  <p>
                    Raghunath
                    <br />
                    <h4>Managing Director</h4>
                    15+ years of IT experience
                    <br />
                  </p>
                </div>
                <div className="Client2">
                  <figure>
                    <a href="#">
                      <img src={shiva} alt="Client 2" />
                    </a>
                  </figure>
                  <h3>Shiva</h3>
                </div>
              </div>
              <div id="Rightside">
                <ul>
                  <li>
                    <div className="Industrial">
                      <figure></figure>
                    </div>
                    <div className="Information">
                      <h4>
                        <span>Dabbara Nagarjuna</span>
                      </h4>
                      <h4>Co & Founder</h4>
                      <p>
                        Experience in web designing, development and digital
                        marketing.
                      </p>

                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-rss" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="Industrial">
                      <figure></figure>
                    </div>
                    <div className="Information">
                      <h4>
                        <span>Dabbara Shivaprasad</span>
                      </h4>
                      <h4>Developer</h4>
                      <p>Experienced in web developer.</p>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-rss" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* // End Middle Section // */}
        </div>

        <section className="our-team-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="http://www.commport.com/wp-content/uploads/2016/03/testimonialimage4.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="title">m.raju</h3>
                    <span className="post">UI Designer & Digital Marketer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="http://www.commport.com/wp-content/uploads/2016/03/testimonialimage4.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="title">Ravikanth</h3>
                    <span className="post">Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="http://www.commport.com/wp-content/uploads/2016/03/testimonialimage4.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="title">Lokesh</h3>
                    <span className="post">Web Developer </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="our-team">
                  <div className="pic">
                    <img src="http://www.commport.com/wp-content/uploads/2016/03/testimonialimage4.jpg" />
                  </div>
                  <div className="team-content">
                    <h3 className="title">srikanth</h3>
                    <span className="post">Graphic Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
