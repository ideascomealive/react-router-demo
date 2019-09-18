import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function WorkDetail() {

	useEffect(() => {
		fetchDrink();
	}, []);

	const [item, setItem] = useState({});

	const fetchDrink = async () => {
        const fetchDrink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
`);
        const item = await fetchDrink.json();

        console.log(item);
	};

  return (
    <div>
    	<h1>Drink</h1>
    </div>
  );
}

export default WorkDetail;
