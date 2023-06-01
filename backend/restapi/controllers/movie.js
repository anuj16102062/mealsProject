

const Movie = require('../models/movie');
const { validationResult } = require('express-validator/check');
exports.getMovies = async (req, res, next) => {

    data = await Movie.find()
    if (data){res.status(200).json({
        message: '  Get movie successfully!',
        data: data
      });
    }
      
};

exports.createMovie = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  // if (!req.file) {
  //   const error = new Error('No image provided.');
  //   error.statusCode = 422;
  //   throw error;
  // }
  // const imageUrl = req.file.path;
  let creator;
  console.log(req.body,'30')
  const post = new Movie({
    title: req.body.title,
    text: req.body.openingText,
    release_date: req.body.releaseDate,
    // creator: req.userId
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Product created successfully!',
        post: post
      });
      
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};