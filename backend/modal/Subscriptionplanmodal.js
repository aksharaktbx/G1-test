const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  planType: {
    type: String,
    required: true, // Weekly, Monthly, or Lifetime
    enum: ['weekly', 'monthly', 'lifetime'],
  },
  price: {
    type: Number,
    required: true, // Price per month or year
  },
  currency: {
    type: String,
    required: true, // Currency of the price (e.g., USD, INR)
    enum: ['USD', 'INR', 'EUR'], // You can add more currencies as per your requirements
  },
  duration: {
    type: Number,
    required: true, // Duration in months (e.g., 1 month, 12 months)
  },
  startDate: {
    type: Date,
    required: function () {
      return this.planType !== 'lifetime'; // Only required if the plan is not lifetime
    },
  },
  endDate: {
    type: Date,
    required: function () {
      return this.planType !== 'lifetime'; // Only required if the plan is not lifetime
    },
  },
  maxUsers: {
    type: Number,
    required: true, // Max number of users allowed for the plan
    default: 1, // Default to 1 for most plans
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  totalDays: {
    type: Number,
    default: 0, // This will be calculated if the plan is not lifetime
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save middleware to calculate totalDays if the plan is not lifetime
subscriptionPlanSchema.pre('save', function (next) {
  if (this.planType !== 'lifetime' && this.startDate && this.endDate) {
    // Calculate the total days only if it's not a lifetime plan
    const diffTime = Math.abs(this.endDate - this.startDate); // Difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    this.totalDays = diffDays;
  } else if (this.planType === 'lifetime') {
    // If it's a lifetime plan, set totalDays to -1 or some indicative value (since it's indefinite)
    this.totalDays = -1; // Indicates no expiration for lifetime plans
  }
  next();
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);
