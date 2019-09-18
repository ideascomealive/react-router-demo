import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Testimonial from './Testimonial';
import { BrowserRouter as Router, Switch, Route } from react-router-dom;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <About />
        <Work />
        <Testimonial />
      </div>
    </Router>
  );
}

export default App;
