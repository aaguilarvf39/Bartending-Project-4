import {useState} from "react"

export function DrinkIndex() {
    const [drink, setDrink] = useState([]);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(response => response.json())
        .then(data => {
            setDrink(data.drinks)
        });

    return (
        <div>
            {drink.map((d) => {
                const {
                    idDrink,
                    strDrink,
                    strDrinkThumb

                } = d
            return (
                <div className="idDrink" key={idDrink}>
                    <h1>{strDrink}</h1>
                    <img src={strDrinkThumb}></img>
                    <form>
                        <input type="text" />
                        <select name="rating">
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                        <button type="submit">Add to saved cocktails</button>
                    </form>
                </div>
            )
        })}
        </div>
    )
}