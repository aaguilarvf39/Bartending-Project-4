import { useState, useEffect } from "react"
import * as drinksApi from "../../utilities/drinks-api"
import DrinksList from "../../components/DrinksList/DrinksList";

export default function DrinkIndex() {
    const [drinks, setDrinks] = useState([]);
    console.log(drinks, "hello world");
    useEffect(() => {
        async function getAllDrinks() {
            const drinks = await drinksApi.getAll();
            setDrinks(drinks);
        }
        getAllDrinks();
    }, []);

    return (
        <div>
            {drinks.map(d =>
                <DrinksList drinks={drinks} />
            )}
        </div>
    )
}
//     return (
//         <>
//             {drinks.map((d) => {
//                 const {
//                     idDrink,
//                     strDrink,
//                     strDrinkThumb

//                 } = d
//             return (
//                     <div className="idDrink">
//                         <h1>{strDrink}</h1>
//                         <img src={strDrinkThumb}></img>
//                         <form>
//                             <input type="text" placeholder="Comment" /> <br></br>
//                             <label>Rating</label> <br></br>
//                             <select name="rating">
//                                 <option value="5">5</option>
//                                 <option value="4">4</option>
//                                 <option value="3">3</option>
//                                 <option value="2">2</option>
//                                 <option value="1">1</option>
//                             </select>
//                             <button type="submit">Add to saved cocktails</button>
//                         </form>
//                     </div>
//                 ) 
//             },
//         </>
//     )
// }