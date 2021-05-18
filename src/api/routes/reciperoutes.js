const router = require('express').Router();
const {
    CreateRecipeController,
    ReadSingleRecipeController,
    ReadRecipeController,
    UpdateRecipeController,
    DeleteRecipeController
} = require('../controllers/recipecontroller');


/**
 * @route POST /recipe/create
 * @desc Creates the new recipe
 * @access Public
 */
router.post('/create', CreateRecipeController);

/**
 * @route POST /recipe/readsingle/:id
 * @desc Access Single Recipe
 * @access Public
 */
 router.post('/readsingle/:id', ReadSingleRecipeController);

/**
 * @route POST /recipe/read
 * @desc read all recipies
 * @access Public
 */
 router.post('/read', ReadRecipeController);

 /**
 * @route PATCH /recipe/update/:id
 * @desc update the existing recipe
 * @access Public
 */
  router.patch('/update/:id', UpdateRecipeController);

  /**
 * @route DELETE /recipe/delete/:id
 * @desc delete the existing recipe
 * @access Public
 */
   router.delete('/delete/:id', DeleteRecipeController);

module.exports = router
