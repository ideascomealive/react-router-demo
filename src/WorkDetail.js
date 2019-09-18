import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Work() {

	useEffect(() => {
		fetchDrink();
	}, []);

	const [item, setItem] = useState({});

	const fetchDrink = async () => {
		
	};

  return (
    <div>
    	<h1>Drink</h1>
    </div>
  );
}

export default Work;
