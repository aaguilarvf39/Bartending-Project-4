const Drink = require('../../models/drink');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const drinks = await Drink.find({}).sort('name').populate('category').exec();
    drinks.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json()
}