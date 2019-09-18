import React, {useState, useEffect} from 'react';
import './App.css';

function Work() {

	useEffect(() => {
		fetchDrinks();
	}, []);

	const fetchDrinks = async () => {
		const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');
		
		const items = await data.json();

		console.log(items);
	}
  return (
    <div>
      <h1>Work</h1>
    </div>
  );
}

export default Work;
