const mongoose = require('mongoose');


const today = new Date(Date.now());

const recipeSchema = mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
    directions: [String],
    createdAt:{type: String ,default: today.toDateString().slice(4,15)}

});

const RecipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeModel;
