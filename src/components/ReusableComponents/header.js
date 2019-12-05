import React, { Component } from 'react'
import './header.css'
import logo from '../assets/TrinetraWebTechnologies.jpg'
import { Link } from 'react-router-dom'
export default class header extends Component {
    render() {
        return (
        
          <div>
          <div className="top-hader">
            <div className="wrap">
              <div className="top-header-left">
                <h5>PHONE: +91 9381563895 </h5>
              </div>
              <div className="top-header-right">
                <h5>
                  Welcome to Trinetra Web Technologies - Build Your Business Not Just a
                  Website..
                </h5>
              </div>
              <div className="clear"> </div>
            </div>
          </div>
          <i className="line"> </i>
          <div className="main-header">
            <div className="wrap">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} title="Trinetra Web Technologies" />
                </a>
              </div>
              <div className="top-nav">
                <ul>
                  <li>
                  <Link to="/">Home</Link>
                  </li>
                  <li>
                  <Link to="/about">About</Link>
                  </li>
                  <li>
                  <Link to="/services">Services</Link> 
                  </li>
                  <li>
                  <Link to="/work">Projects</Link> 
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="clear"> </div>
            </div>
          </div>
          <i className="line"> </i>
        </div>
        
           
          
        )
    }
}




