import './DrinksCard.css';

export default function DrinksCard({drink}) {
    return (
        
       <form className="drinkcard">
        <h1>{drink.strDrink}</h1>
        <img src={drink.strDrinkThumb}></img> <br></br>
        <input type="text" placeholder="Comment" />
        <h2> Cocktail Rating</h2>
        <select name="rating">
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
        <button type="submit">Add to saved cocktails</button>
      </form>
    )
}