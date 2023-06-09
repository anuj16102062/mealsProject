const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    quantity: {
        type: String,
        required: true
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
