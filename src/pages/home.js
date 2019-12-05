import React, { Component } from 'react'
import Header from '../components/ReusableComponents/header.js' 
import CitiesSlider from '../components/homeComponent/CitiesSlider.js' 

import Patners from '../components/homeComponent/patners.js'
import Footer from '../components/ReusableComponents/footer.js' 
export default class home extends Component {
   render() {     
const slides = [
  {
    city: 'bangalore',
    country: 'web design services',
    img: 'http://www.boltage.org/wp-content/uploads/2017/03/webdesign-process.jpg',
  },
  {
    city: 'bangalore',
    country: 'web development company',
    img: 'http://oakleygreenwood.com.au/wp-content/uploads/2017/10/rawpixel-678089-unsplash-1024x597.jpg',
  },
  {
    city: 'bangalore',
    country: 'digital marketing services',
    img:'https://www.hiboox.com/wp-content/uploads/2019/08/digital-marketing-1.jpg'
  }
 
];
return (
            <div>
               <Header/> 
               <CitiesSlider slides={slides} />
               <Patners/>
              <i className="line"> </i>
              <Footer/>
            </div>
        )
    }
}
