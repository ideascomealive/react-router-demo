import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Testimonial from './Testimonial';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//React router will now allow us to visit the urls and return the component

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/testimonials" component={Testimonial} />
      </div>
    </Router>
  );
}

export default App;
