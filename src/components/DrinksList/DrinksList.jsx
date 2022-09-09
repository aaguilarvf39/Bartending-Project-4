import DrinksCard from "../DrinksCard/DrinksCard"

export default function DrinksList({drinks, idx}) {
    console.log(drinks, "work!");
    const allDrinks = drinks.drinks.map((drink, idx) => 
        <DrinksCard key={idx} drink={drink} />
) 



    return (
        <>
        <h1>Hello Drinks</h1>
        {allDrinks}
        </>
    )
}