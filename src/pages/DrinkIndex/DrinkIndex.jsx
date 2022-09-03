import {useState} from "react"

export function DrinkIndex() {
    const [drink, setDrink] = useState([]);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(response => response.json())
        .then(data => {
            setDrink(data.drinks)
        });

    return (
        <div className="drinkindex">
            {drink.map((d) => {
                const {
                    idDrink,
                    strDrink,
                    strDrinkThumb

                } = d
            return (
                <div key={idDrink}>
                    <h1>{strDrink}</h1>
                    <img src={strDrinkThumb}></img>
                </div>
            )
        })}
        </div>
    )
}