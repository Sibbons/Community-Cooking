const RecipeModel = require('../models/recipeSchema');

const getHome = (req, res) => {
    res.send("HI FROM ANOTHA FILE");
}

const postRecipe = async (req, res) => {
    console.log(req.body)
    //let data = JSON.parse(req.body);
    
    let {title, description, ingredients, directions} = req.body;
    let ingredients1 = req.body.ingredients;
    ingredients = ingredients.split(',')
    directions = directions.split(',')

    console.log( Array.isArray(directions), directions);


    const newRecipe = new RecipeModel({title, description, ingredients, directions});
    res.send("Hi from post")
    
    // try{
    //     await newRecipe.save();
    //     res.status(200).json(newRecipe);
    // }catch(e){
    //     res.status(409).json({message: e.message});
    // }
}

const getAllRecipe = async (req, res) => {
    let allRecipe;
    try{
        allRecipe = await RecipeModel.find();
        res.status(200).json(allRecipe);
    }catch(e){
        res.status(409).json({message: e.message});
    }
}

const getRecipe = async (req, res) => {
    const title = req.params.title.replaceAll("-", " ");

    try{
        const recipe = await RecipeModel.findOne({title: title});
        //console.log(recipe, recipe);
        res.status(200).json(recipe);
    }catch(e){
        res.status(409).json({message: e.message});
    }
}



module.exports = { getHome , postRecipe, getAllRecipe, getRecipe};