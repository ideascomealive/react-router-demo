import React, {useState, useEffect} from 'react';
import './App.css';

function Work() {

	useEffect(() => {
		fetchDrinks();
	}, []);

	const [items, setItems] = useState([]);

	const fetchDrinks = async () => {
		const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');

		const items = await data.json();

		console.log(items.drinks);

		setItems(items.drinks);
	}
  return (
    <div>
    	{items.map(item => (
    		<h1 key={item.idDrink}>{item.strDrink}</h1>
    	))}
    </div>
  );
}

export default Work;
