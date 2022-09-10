import RandomDrinkCard from "../../components/RandomDrinksCard/RandomDrinksCard";
import * as drinksApi from "../../utilities/drinks-api"
import { useState } from "react"
import './GetRandomDrinkPage.css'


export default function GetRandomDrinkPage() {
   const [randomDrink, setRandomDrink] = useState([])
      async function getRandomCocktail() {
         const randomCocktail = drinksApi.getRandomCocktail();
         setRandomDrink(randomCocktail)
         console.log(randomCocktail, "hi")
         if (!randomCocktail) return null;
      }
      
      return (
         <div className="random">
         <button onClick={getRandomCocktail}>Generate Mystery Cocktail</button>
          {randomDrink.map((d) => (
           <RandomDrinkCard drink={d} />
         ))}
    </div>
 )
}