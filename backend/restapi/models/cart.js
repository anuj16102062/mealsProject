const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
        userId:{type:String, default:""},
        totalAmount: { type: Number, default:"" },
        items: [
            {
                id:{type:String, default:""},
                name:{type:String, default:""},
                amount: { type: Number, default:"" },
                price: { type: Number, default:"" },
            }
        ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);