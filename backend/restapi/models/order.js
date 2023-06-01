const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
        name:{type:String, default:""},
        totalAmount: { type: Number, default:"" },
        orderDetails: [
            {
                id:{type:String, default:""},
                name:{type:String, default:""},
                amount: { type: Number, default:"" },
                price: { type: Number, default:"" },
            }
        ],
        address: [
          {
              city:{type:String, default:""},
              postalCode:{type:String, default:""},
              street:{type:String, default:""},
          }
      ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);