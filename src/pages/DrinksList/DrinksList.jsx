import { useState, useEffect } from "react"
import * as drinksApi from "../../utilities/drinks-api"
import DrinksCard from "../../components/DrinksCard/DrinksCard";

export default function DrinksList() {
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        async function getAllDrinks() {
            const drinks = await drinksApi.getAll();
            setDrinks(drinks);
        }
        getAllDrinks();
    }, []);

    return (
        <div>
            <h1 className='heading'>What Are Ya Havin'?</h1>
            {drinks.map((d,i) => 
              <DrinksCard key={i} drink={d} />
            )}
        </div>
    )
}