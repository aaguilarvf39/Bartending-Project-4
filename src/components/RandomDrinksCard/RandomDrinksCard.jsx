export default function RandomDrinkCard({ drink }) {
    if (drink === null) return null;
    
    return (
        <div className="Random">
            <h1>{drink.strDrink}</h1>
          <form className="generate">
            <section className="h3">
            <h3>{drink.strIngredient1} - {drink.strMeasure1}</h3>
            <h3>{drink.strIngredient2} - {drink.strMeasure2}</h3>
            <h3>{drink.strIngredient3} - {drink.strMeasure3}</h3>
            <h3>{drink.strIngredient4} - {drink.strMeasure4}</h3>
            <h3>{drink.strIngredient5} - {drink.strMeasure5}</h3>
            <h3>{drink.strIngredient6} - {drink.strMeasure6}</h3>
            </section>
            <br></br>
            <h2>{drink.strInstructions}</h2>
            <img src={drink.strDrinkThumb} height="450" width="450"></img>
            <br /><br />
          </form>
        </div>
    )
}
       