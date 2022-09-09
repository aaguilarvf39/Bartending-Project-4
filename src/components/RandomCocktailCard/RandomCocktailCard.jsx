

export default function RandomCocktailCard({cocktail, addCocktail}) {
    function handleSubmit(evt) {
        evt.preventDefault();
        const newCocktail = {
            idDrink: evt.target[0].value,
            strDrink: evt.target[1].value,
            strInstructions: evt.target[2].value,
            strDrinkThumb: evt.target[3].value,
            strIngredient1: evt.target[4].value,
            strIngredient2: evt.target[5].value,
            strIngredient3: evt.target[6].value,
            strIngredient4: evt.target[7].value,
            strIngredient5: evt.target[8].value,
            strIngredient6: evt.target[9].value,
            strMeasure1: evt.target[10].value,
            strMeasure2: evt.target[11].value,
            strMeasure3: evt.target[12].value,
            strMeasure4: evt.target[13].value,
            strMeasure5: evt.target[14].value,
            strMeasure6: evt.target[15].value,
            strTags: evt.target[16].value 
        }
        console.log("render")
        addCocktail(newCocktail)
    }
    return (
        <div>
            <h1>{cocktail.id.Drink} </h1>


            <form onSubmit={handleSubmit}>
                <input type='hidden' 
                    value={cocktail.id.Drink}
                    name='name'
                />
            </form>
        </div>

        
    )
}