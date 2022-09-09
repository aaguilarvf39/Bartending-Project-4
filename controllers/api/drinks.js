const Drink = require('../../models/drink');
var fetch = require("node-fetch")

module.exports = {
    getDrinks,
    randomCocktail,
};


async function getDrinks(req, res) {
  let drinks = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then((response) => response.json())
    console.log(drinks, "drinks");
  res.json(drinks.drinks);
}

async function randomCocktail(req, res) {
  let randomCocktail = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
  res.json(randomCocktail);
}