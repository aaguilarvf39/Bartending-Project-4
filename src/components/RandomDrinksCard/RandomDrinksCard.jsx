

export default function RandomDrinkCard({ drink }) {
    if (drink === null) return null;
    
    return (
        <div className="Random">
            <h1>{drink.strDrink}</h1>
        </div>
    )
}
       