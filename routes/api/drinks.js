const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/', drinksCtrl.getDrinks);
router.get('/random', drinksCtrl.randomCocktail);


module.exports = router;
