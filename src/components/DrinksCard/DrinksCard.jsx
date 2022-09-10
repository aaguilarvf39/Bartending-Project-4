import './DrinksCard.css';

export default function DrinksCard({drink}) {
    return (
        
    <div>
        <h1>What Are Ya Havin'?</h1> <br></br>
       <form className="drinkcard">
        <h2>{drink.strDrink}</h2> <br></br>
        <img src={drink.strDrinkThumb}></img> <br></br>
        <input type="text" placeholder="Comment" />
        <h3> Cocktail Rating</h3>
        <select name="rating">
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
        <button type="submit">Add to saved cocktails</button>
          </form>
    </div>
    )
}