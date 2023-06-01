const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    quantity: {
        type: Number,
        required: true
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Meals', mealsSchema);