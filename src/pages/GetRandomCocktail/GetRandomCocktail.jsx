import RandomCocktailCard from "../../components/RandomCocktailCard/RandomCocktailCard";

export default function GetRandomCocktail({ getRandomCocktail, randomCocktail, addCocktail }) {
    let randomDrinks = randomCocktail.map((c) => ( <RandomCocktailCard key={c.id.Drink} cocktail={c} addCocktail={addCocktail}/> ))

 return (
    <>
     <button onClick={getRandomCocktail}>Generate MysterY Cocktail</button>
     {randomDrinks}
    </>
 )
}