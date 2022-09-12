

export default function RandomDrinkCard({ drink }) {
    if (drink === null) return null;
    
    return (
        <div className="Random">
            <h1>{drink.strDrink}</h1>
          <form className="generate">
            <h3>{drink.strIngredient1} - {drink.strMeasure1}</h3>
            <h3>{drink.strIngredient2} - {drink.strMeasure2}</h3>
            <h3>{drink.strIngredient3} - {drink.strMeasure3}</h3>
            <h3>{drink.strIngredient4} - {drink.strMeasure4}</h3>
            <h3>{drink.strIngredient5} - {drink.strMeasure5}</h3>
            <h3>{drink.strIngredient6} - {drink.strMeasure6}</h3> <br></br>
            <h2>{drink.strInstructions}</h2>
            <img src={drink.strDrinkThumb}></img>
            <input type="text" placeholder="Comment" />
            <h2>Rating</h2>
            <select name="rating">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
            <button className="gmc" type="submit">Add to saved cocktails</button>
          </form>
        </div>
    )
}
       