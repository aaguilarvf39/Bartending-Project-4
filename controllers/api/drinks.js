const Drink = require('../../models/drink');
var fetch = require("node-fetch")

module.exports = {
    getDrinks,
};


async function getDrinks(req, res) {
    let drinks = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((response) => response.json())
    res.json(drinks);
}
console.log(getDrinks());