const router = require('express').Router();
const {
    HomepageController,
    SignupController,
    SigninController
} = require('../controllers/usercontroller');

const  { isLoggedIn } = require('../middleware/authtoken');

/**
 * @route GET /user
 * @desc test route
 * @access Public
 */
router.get('/', isLoggedIn, HomepageController);


/**
 * @route POST /user/signup
 * @desc sign up the user
 * @access Public
 */
 router.post('/signup', SignupController);

 /**
 * @route POST /user/signin
 * @desc signin the user
 * @access Public
 */
  router.post('/signin', SigninController);

module.exports = router;