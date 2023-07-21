const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
    
        }
      }
    ],
    paymentMethod: {
      type: String,
     // Payment methods: Cash on Delivery (COD) or Credit Card (Card)
     
    },
    username: {
      type: String,
    
    },
    address: {
      type: String,
    
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, id: false }
);

ordersSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

module.exports = mongoose.model('Order', ordersSchema);
