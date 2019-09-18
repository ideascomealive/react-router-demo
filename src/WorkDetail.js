import React, {useState, useEffect} from 'react';
import './App.css';

function WorkDetail({ match }) {

	useEffect(() => {
		fetchDrink();
        console.log(match);
	}, []);

	const [item, setItem] = useState({

    });

	const fetchDrink = async () => {
        const fetchDrink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );
        const item = await fetchDrink.json();

        setItem(item.drinks[0])
	};

  return (
    <div>
    	<h1>{item.strDrink}</h1>
        <img src={item.strDrinkThumb} />
    </div>
  );
}

export default WorkDetail;
