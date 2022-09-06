import {useState} from "react"

export function MysteryCocktailPage() {
    const [mystery, setMystery] = useState([]);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            setMystery(data.drinks)
        });

    return (
        <div className="MysteryCocktailPage">
            {mystery.map((m) => {
                const {
                    idDrink,
                    strDrink,
                    strInstructions,
                    strDrinkThumb
    
                } = m
            return (
                <div key={idDrink}>
                    <h1>{strDrink}</h1>
                    <h2>{strInstructions}</h2>
                    <img src={strDrinkThumb}></img>
                </div>
            )
        })}
        </div>
    )
}