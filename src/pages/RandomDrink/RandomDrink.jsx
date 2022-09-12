import RandomDrinkCard from "../../components/RandomDrinksCard/RandomDrinksCard";
import * as drinksApi from "../../utilities/drinks-api"
import { useState } from "react"
import './RandomDrink.css'


export default function RandomDrink() {
   const [randomDrink, setRandomDrink] = useState(null)
      async function getRandomCocktail() {
         const randomCocktail = await drinksApi.getRandomCocktail();
         setRandomDrink(randomCocktail)
      }
      return (
        <div className="random">
         <button className="gmc" onClick={getRandomCocktail}>Generate Mystery Cocktail</button>
           <RandomDrinkCard drink={randomDrink} />
        </div>
 )
}