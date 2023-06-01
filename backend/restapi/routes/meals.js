const express = require('express');
const { body } = require('express-validator/check');

const mealsController = require('../controllers/meals');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/', isAuth, mealsController.getMeals);

// POST /feed/post
router.post(
  '/',
  mealsController.createMeals
);
router.post(
    '/order',
    mealsController.createMealsOrder
  );


module.exports = router;
