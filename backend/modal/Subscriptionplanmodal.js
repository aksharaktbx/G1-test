const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    enum: ['USD', 'EUR', 'INR', 'GBP'], // Add more currencies if needed
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  accessLevel: {
    type: String,
    enum: ['Full', 'Limited'],
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan;
