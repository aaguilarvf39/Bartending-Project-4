import { useState, useEffect } from "react"
import * as drinksApi from "../../utilities/drinks-api"
import DrinksCard from "../../components/DrinksCard/DrinksCard";

export default function DrinkIndex() {
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
            {drinks.map(d => 
              <DrinksCard drink={d} />
            )}
        </div>
    )
}