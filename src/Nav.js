import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//Link component uses the to prop to power hyperlink

function Nav() {

  const navStyles = {
  	color: 'white'
  };

  return (
    <nav>
      <h2>Logo</h2>
      <h4>Slogan</h4>
      <ul className="nav-items">
      	<Link style={navStyles} to="/about">
      		<li>About</li>
      	</Link>
      	<Link style={navStyles} to="/work">
			<li>Work</li>
      	</Link>
      	<Link style={navStyles} to="/testimonials">
			<li>Testimonials</li>
		</Link>
      </ul>
	</nav>
  );
}

export default Nav;
