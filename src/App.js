import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home.js'
import About from './pages/about.js'
import Services from './pages/services.js'
import Work from './pages/work.js'
import Contact from './pages/contact.js'

function App() {
  return (
  <Router>
  <Route exact path="/"  component={Home}   />
  <Route path="/about" component={About} />
  <Route path="/services" component={Services} />
  <Route path="/work" component={Work} />
  <Route path="/contact" component={Contact} />
  </Router>
  )
}

export default App;
