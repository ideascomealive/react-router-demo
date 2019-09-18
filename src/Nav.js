import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h2>Logo</h2>
      <h4>Slogan</h4>
      <ul className="nav-items">
      	<Link to="/about">
      		<li>About</li>
      	</Link>
      	<Link to="/work">
			<li>Work</li>
      	</Link>
      	<Link to="/testimonials">
			<li>Testimonials</li>
		</Link>
      </ul>
	</nav>
  );
}

export default Nav;
