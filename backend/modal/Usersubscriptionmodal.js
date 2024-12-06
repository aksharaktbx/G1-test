const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the purchased plan
const PurchasedPlanSchema = new Schema({
  userId: {
    type: String, // Reference to the user who purchased the plan
    required: true
  },
  planId: {
    type: String, // Reference to the plan that was purchased
    required: true
  },
  planName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  transactionDetails: {
    paymentMethod: {
      type: String, // Payment method used for the transaction
      required: true
    },
    transactionId: {
      type: String, // Unique transaction ID
      required: true
    },
    status: {
      type: String, // Status of the transaction (e.g., 'Success', 'Failed')
      required: true
    }
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'], // Subscription status
    default: 'Active'
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create and export the model
const PurchasedPlan = mongoose.model('PurchasedPlan', PurchasedPlanSchema);
module.exports = PurchasedPlan;
