import React,{Component} from 'react'
import Header from '../components/ReusableComponents/header.js' 
import Hero from "../components/aboutComponent/hero.js";
import Banner from "../components/aboutComponent/banner.js";
import Footer from '../components/ReusableComponents/footer.js' 
import { Link } from 'react-router-dom'
import Axios from 'axios';

import './contact.css'
export default class contact extends Component {
   
   
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    }
}


handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
}


handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
        disabled: true
    });

    // Axios.post('http://localhost:9000/api/email', this.state)
    //     .then(res => {
    //         if(res.data.success) {
    //             this.setState({
    //                 disabled: false,
    //                 emailSent: true
    //             });
    //         } else {
    //             this.setState({
    //                 disabled: false,
    //                 emailSent: false
    //             });
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);

    //         this.setState({
    //             disabled: false,
    //             emailSent: false
    //         });
    //     })

}
  render(){ 
     return (
        <div>
           <Header/>
           <Hero hero="roomsHero">
             <Banner title="Contact Us">
            <Link to="/" className="btn-primary">
            return home
            </Link>
           </Banner>
         </Hero>
         <i className="line"> </i>
           <section id="contact">
        <div className="container">
          <div className="title2">
           
          </div>
          <div className="contact-us">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="row">

                  <form id="form_val" onSubmit={this.handleSubmit}>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="email" id="email" name="email" className="form-control" placeholder="example@gmail.com" value={this.state.email} onChange={this.handleChange}/>
                      </div>
                    </div>
                   
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea id="message" name="message" className="form-control" placeholder="Message" rows={4}  value={this.state.message} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="centerbtn">      
                        <button type="submit" id="submit" disabled={this.state.disabled}  className="buttonform">Send</button>
                      </div>
                    </div>
                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent Successfully</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="contact-details">
                  <ul className="contact-list">
                    <li><i className="fa fa-map-marker"><span className="contact-text place">Banglore</span></i></li>
                    <li><i className="fa fa-phone"><span className="contact-text phone"><a href="tel:693137264341840">+91 9381563895</a></span></i></li>
                    <li><i className="fa fa-envelope"><span className="contact-text gmail"><a href="mailto:mymail@gmail.com">arjunchowdary335@gmail.com</a></span></i></li>
                  </ul>
                  <ul className="social-media-list">
                    <li><a href="#" target="_blank">
                        <i className="fa fa-codepen" /></a>
                    </li>
                    <li><a href="#" target="_blank">
                        <i className="fa fa-github" aria-hidden="true" /></a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-linkedin" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <i className="line"> </i>
            <Footer/>
        </div>
    )
   }
}
