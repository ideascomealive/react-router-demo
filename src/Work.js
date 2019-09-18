import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Work() {

	useEffect(() => {
		fetchWorks();
	}, []);

	const [items, setItems] = useState([]);

	const fetchWorks = async () => {
		const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');

		const items = await data.json();

		console.log(items.drinks);

		setItems(items.drinks);
	}
  return (
    <div>
    	{items.map(item => (
    		<h1 key={item.idDrink}>
    			<Link to={`/work/${item.idDrink}`}>
    				{item.strDrink}
    			</Link>
    		</h1>
    	))}
    </div>
  );
}

export default Work;
