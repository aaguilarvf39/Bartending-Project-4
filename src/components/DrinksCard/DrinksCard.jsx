import './DrinksCard.css';

export default function DrinksCard({drink, handleDetail, idDrink}) {
    return (
        
       <form className="drinkcard"><span>
        <h1>{drink.strDrink}</h1>
        <img src={drink.strDrinkThumb} height="500" width="500"></img> <br></br><br />
        <button type="submit">Add to saved cocktails</button>
        <button onClick={() => handleDetail(idDrink)}>Get Drink Details</button>
        </span>
      </form>
    )
}