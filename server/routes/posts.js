const { Router } = require('express');
const express = require('express');
const { getHome, postRecipe, getAllRecipe, getRecipe } = require('../controller/recipe');


const router = express.Router();

router.get('/', getHome);
router.post('/submitRecipe', postRecipe);
router.get('/recipes', getAllRecipe);
router.get('/recipe/:title', getRecipe);
 

module.exports = router;