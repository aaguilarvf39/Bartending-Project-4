const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.get('/', drinksCtrl.getDrinks);

module.exports = router;
