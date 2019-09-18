import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import WorkDetail from './WorkDetail';
import Testimonial from './Testimonial';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Notice that our root route renders repeatedly regardless of requested resource

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" exact component={Work} />
            <Route path="/work/:id" component={WorkDetail}/>
            <Route path="/testimonials" component={Testimonial} />
          </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
  );

export default App;
