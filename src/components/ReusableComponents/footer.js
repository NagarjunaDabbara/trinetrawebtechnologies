import React, { Component } from 'react'
import './footer.css'
export default class footer extends Component {
    render() {
        return (
            <div>
         <footer className="flex-rw">
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">QUICK LINKS</h4>
    </li>
    <li>
      <a
       href="#"
        className="generic-anchor footer-list-anchor"
        itemProp="significantLink"
      >
       Home
      </a>
    </li>
    <li>
      <a
       href="#"
        className="generic-anchor footer-list-anchor"
        itemProp="significantLink"
      >
      About
      </a>
    </li>
    <li>
      <a
        href="#"
        className="generic-anchor footer-list-anchor"
        itemProp="significantLink"
      >
       Services
      </a>
    </li>
    <li>
      <a
      href="#"
        itemProp="significantLink"
        className="generic-anchor footer-list-anchor"
      >
       Work
      </a>
    </li>
    <li>
      <a
        href="#"
        className="generic-anchor footer-list-anchor"
        itemProp="significantLink"
      >
       Contact
      </a>
    </li>
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">Project Links</h4>
    </li>
    <li>
      <a href="http://www.uniqon.co.uk" target="_blank" className="generic-anchor footer-list-anchor">
       UNIQON CONSULTING LIMITED
      </a>
    </li>
    <li>
      <a
        href="" target="_blank"
        className="generic-anchor footer-list-anchor"
      >
       ANANYAENGINEERS
      </a>
    </li>
    <li>
      <a href="https://ananyaeliteproject.herokuapp.com/" target="_blank" className="generic-anchor footer-list-anchor">
       ANNADATA STORE
      </a>
    </li>
    <li>
      <a
        href="https://ananyaeliteproject.herokuapp.com/" target="_blank"
        className="generic-anchor footer-list-anchor"
      >
       DJ-PLAYER
      </a>
    </li>
    
  </ul>
  <ul className="footer-list-top">
    <li id="help">
      <h4 className="footer-list-header">Contact Us</h4>
    </li>
    <li>
      <a
        href="/shop/about-contact"
        className="generic-anchor footer-list-anchor"
        itemProp="significantLink"
      >
      Phone number: +91-9381563895
      </a>
    </li>
  </ul>

  <section className="footer-social-section flex-rw">
  <span className="footer-social-overlap footer-social-connect">
    CONNECT <span className="footer-social-small">with</span> US
  </span>
  <span className="footer-social-overlap footer-social-icons-wrapper">
    <a
      href
      className="generic-anchor"
      target="_blank"
      title="Pinterest"
      itemProp="significantLink"
    >
      <i className="fa fa-pinterest" />
    </a>
    <a
      href
      className="generic-anchor"
      target="_blank"
      title="Facebook"
      itemProp="significantLink"
    >
      <i className="fa fa-facebook" />
    </a>
    <a
      href
      className="generic-anchor"
      target="_blank"
      title="Twitter"
      itemProp="significantLink"
    >
      <i className="fa fa-twitter" />
    </a>
    <a
      href
      className="generic-anchor"
      target="_blank"
      title="Instagram"
      itemProp="significantLink"
    >
      <i className="fa fa-instagram" />
    </a>
    <a
      href
      className="generic-anchor"
      target="_blank"
      title="Youtube"
      itemProp="significantLink"
    >
      <i className="fa fa-youtube" />
    </a>
    <a
      href
      className="generic-anchor"
      target="_blank"
      title="Google Plus"
      itemProp="significantLink"
    >
      <i className="fa fa-google-plus" />
    </a>
  </span>
</section>;


  <section className="footer-bottom-section flex-rw">
    <div className="footer-bottom-wrapper">
      <i className="fa fa-copyright" role="copyright"></i> 2019 
      <address className="footer-address" role="company address">
    TrinetraWebTechnologies
      </address>
      <span className="footer-bottom-rights"> - All Rights Reserved  </span>
    </div>
    <div className="footer-bottom-wrapper">
      <a href="" className="generic-anchor" rel="nofollow">
        Terms
      </a>{" "}
      |{" "}
      <a href="" className="generic-anchor" rel="nofollow">
        Privacy
      </a>
    </div>
  </section>
</footer>
</div>
        )
    }
}
