

const Meals = require('../models/meals');
const Order = require('../models/order');
const { validationResult } = require('express-validator/check');
exports.getMeals = async (req, res, next) => {

    data = await Meals.find()
    if (data){res.status(200).json({
        message: '  Get meals successfully!',
        data: data
      });
    }
      
};

exports.createMeals = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  let creator;
  console.log(req.body,'30')
  const post = new Meals({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    quantity: req.body.quantity,
    // creator: req.userId
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Meals created successfully!',
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
exports.createMealsOrder = (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed, entered data is incorrect.');
      error.statusCode = 422;
      throw error;
    }
    let creator;
    const totalPrice = req.body.items.reduce((accumulator, item) => {
        return accumulator + (item.price*item.amount);
      }, 0);
    const post = new Order({
      name: req.body.userData.name,
      orderDetails: req.body.items,
      totalAmount: totalPrice,
      address: [{
        'city':req.body.userData.city,
        'street':req.body.userData.street,
        'postalCode':req.body.userData.postalCode
      }],

    });
    post
      .save()
      .then(result => {
        res.status(201).json({
          message: 'Meals created successfully!',
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