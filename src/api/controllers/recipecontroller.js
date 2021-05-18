
const {
    CreateRecipeService,
    ReadSingleRecipeService,
    ReadRecipeService,
    UpdateRecipeService,
    DeleteRecipeService
} = require('../services/recipeservices');

const { RecipeValidator } = require('../validations/recipievalidator');

exports.CreateRecipeController = (req, res, next) => {

    const { value, error} = RecipeValidator(req.body);

    if(error) return res.status(402).json({error: error.details[0].message})

    CreateRecipeService(value)
        .then(recipe => res.status(201).json({message: 'Recipe Created',recipe}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}

exports.ReadSingleRecipeController = (req, res, next) => {
    ReadSingleRecipeService(req.params.id)
        .then(recipe => res.status(201).json({message: 'Recipe Found',recipe}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}

exports.ReadRecipeController = (req, res, next) => {
    ReadRecipeService()
        .then(recipies => res.status(201).json({message: 'Recipies Found',recipies}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}

exports.UpdateRecipeController = (req, res, next) => {
    const { value, error} = RecipeValidator(req.body);

    if(error) return res.status(402).json({error: error.details[0].message})

    UpdateRecipeService(req.params.id, value)
        .then(recipe => res.status(201).json({message: 'Recipies Updated',recipe}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}

exports.DeleteRecipeController = (req, res, next) => {
    DeleteRecipeService(req.params.id)
        .then(recipe => res.status(201).json({message: 'Recipies Deleted',recipe}))
        .catch(error => res.status(501).json({message: 'Something went wrong',error}))
}

