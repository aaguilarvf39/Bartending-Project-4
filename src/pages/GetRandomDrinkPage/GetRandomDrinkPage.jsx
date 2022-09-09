import RandomDrinkCard from "../../components/RandomDrinksCard/RandomDrinksCard";
import * as drinksApi from "../../utilities/drinks-api"
import { useState } from "react"


export default function GetRandomDrinkPage() {
   const [randomDrink, setRandomDrink] = useState([])
      function getRandomCocktail() {
         const randomCocktail = drinksApi.getRandomCocktail();
         setRandomDrink(randomCocktail)
         console.log(randomCocktail, "hi")
      }
      
      return (
         <>
     <button onClick={getRandomCocktail}>Generate Mystery Cocktail</button>
          {randomDrink.map((d) => (
           <RandomDrinkCard drink={d} />
         ))}
    </>
 )
}