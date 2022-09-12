const Drink = require('../../models/drink');
var fetch = require("node-fetch")

module.exports = {
    getDrinks,
    randomCocktail,
    show,
};


async function getDrinks(req, res) {
  let drinks = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then((response) => response.json())
  res.json(drinks.drinks);
}

async function randomCocktail(req, res) {
  let randomDrinks = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
  res.json(randomDrinks.drinks[0]);
}

async function show(req, res) {
  let drink = await Drink.findOne({idDrink: req.params.id});
  if (!drink) {
    drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.id}`).then((response) => response.json())
    drink = drink.drinks[0];
    const newDrink = {
      idDrink: drink.idDrink,
      strDrink: drink.strDrink,
      strDrinkThumb: drink.strDrinkThumb,
      strInstructions: drink.StrInstructions,
      ingredients: []
    };
    for (let i = 1; i < 16; i++) {
      const key = `strIngredient${i}`;
      if (drink[key] === null) break;
      const measure = drink[`strMeasure${i}`];
      newDrink.ingredients.push(`${measure || ''} - ${drink[key]}`);
    }
    drink = await Drink.create(newDrink);
  }
  res.json(drink);
}