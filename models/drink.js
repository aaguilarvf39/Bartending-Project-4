const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String},
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: {type: String}
  }, {
    timestamps: true
  });

const drinkSchema = new Schema({
    strDrink: String,
    strDrinkThumb: String,
    idDrink: Number,
    StrInstructions: String,
    comments: [commentSchema],
    ingredients: [{type: String}],
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
  }, {
    timestamps: true,
})

module.exports = mongoose.model("Drink", drinkSchema);