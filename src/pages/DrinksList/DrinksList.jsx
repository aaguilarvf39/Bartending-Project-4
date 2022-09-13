import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import * as drinksApi from "../../utilities/drinks-api"
import DrinksCard from "../../components/DrinksCard/DrinksCard";

export default function DrinksList() {
    const [drinks, setDrinks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllDrinks() {
            const drinks = await drinksApi.getAll();
            setDrinks(drinks);
        }
        getAllDrinks();
    }, []);

    function handleDetail(idDrink) {
        navigate(`/detail/${idDrink}`);
     }

    return (
        <div>
            <h1 className='heading'>Alphabetized Cocktail List</h1>
            {drinks.map((d,i) => 
              <><DrinksCard handleDetail={handleDetail} idDrink={d.idDrink} key={i} drink={d} /><>
                </></>
              )}
        </div>
    )
}