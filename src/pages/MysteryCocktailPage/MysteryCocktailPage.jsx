import { useState } from "react";

export default function MysteryCocktailPage() {
  const [mystery, setMystery] = useState([]);
  function randomDrink() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setMystery(data.drinks);
      });
  }
  return (
    <div className="MysteryCocktailPage">
      <button onClick={randomDrink}>Generate Mystery Cocktail</button>
            {mystery.map((m) => {
                const {
                    idDrink,
                    strDrink,
                    strInstructions,
                    strDrinkThumb,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strMeasure1,
                    strMeasure2,
                    strMeasure3,
                    strMeasure4,
                    strMeasure5,
                    strMeasure6,
                    strTags
    
                } = m
            return (
                <div key={idDrink}>
                    <h1>{strDrink}</h1>
                    <h2>{strInstructions}</h2>
                    <h3>{strIngredient1}</h3>
                    <h3>{strIngredient2}</h3>
                    <h3>{strIngredient3}</h3>
                    <h3>{strIngredient4}</h3>
                    <h3>{strIngredient5}</h3>
                    <h3>{strIngredient6}</h3>
                    <h3>{strMeasure1}</h3>
                    <h3>{strMeasure2}</h3>
                    <h3>{strMeasure3}</h3>
                    <h3>{strMeasure4}</h3>
                    <h3>{strMeasure5}</h3>
                    <h3>{strMeasure6}</h3>
                    <h4>{strTags}</h4>
                    <img src={strDrinkThumb}></img>
                    <form>
                        <input type="text" placeholder="Comment" /> <br></br>
                        <label>Rating</label> <br></br>
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

