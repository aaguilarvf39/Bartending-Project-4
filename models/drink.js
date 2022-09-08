const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
      match: /.{5,}/
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const drinkSchema = new Schema({
    strDrink: String,
    strDrinkThumb: String,
    idDrink: Number,
    StrInstructions: String,
    comments: [commentSchema],
})



module.exports = mongoose.model("Drink", drinkSchema);