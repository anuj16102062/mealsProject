const express = require('express');
const { body } = require('express-validator/check');

const productController = require('../controllers/movie');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/', isAuth, productController.getMovies);

// POST /feed/post
router.post(
  '/',
  productController.createMovie
);


module.exports = router;
