export default function DrinksCard({drink}) {
    return (
    <>
        <div>{drink.strDrink}</div>
            <div className="pictures" style={{backgroundImage: `url(${drink.strDrinkThumb})`}}></div>
            <div>{drink.idDrink}</div>
            <button type="submit">Add to saved cocktails</button>
    </>
    )
}