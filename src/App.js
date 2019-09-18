import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Testimonial from './Testimonial';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Work />
      <Testimonial />
    </div>
  );
}

export default App;
