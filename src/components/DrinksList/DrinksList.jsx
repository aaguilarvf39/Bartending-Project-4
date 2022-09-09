import DrinksCard from "../DrinksCard/DrinksCard"

export default function DrinksList({drinks}) {
    console.log(drinks, "work!");
    const allDrinks = drinks.map((drink, idx) => 
        <DrinksCard key={idx} drink={drink}/>
) 



    return (
        <>
        <h1>Hello Drinks</h1>
        {allDrinks}
        </>
    )
}