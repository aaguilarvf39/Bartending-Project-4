import DrinksCard from "../DrinksCard/DrinksCard"

export default function DrinksList({drinks}) {
    const allDrinks = drinks.map((drink, idx) => {
        <DrinksCard drink={drink} index={idx} />
}) 
    return (
        <>
        {allDrinks}
        </>
    )
}