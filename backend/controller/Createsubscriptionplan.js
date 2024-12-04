// controllers/subscriptionPlanController.js
const SubscriptionPlan = require('../modal/Subscriptionplanmodal'); // Adjust the path as per your structure

// Controller function to create a new subscription plan
exports.createSubscriptionPlan = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      planType,
      price,
      currency,
      duration,
      startDate,
      endDate,
      maxUsers,
      status,
    } = req.body;

    // Validate required fields
    if (!planType || !price || !currency || !duration || !maxUsers) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new subscription plan object
    const newPlan = new SubscriptionPlan({
      planType,
      price,
      currency,
      duration,
      startDate,
      endDate,
      maxUsers,
      status: status || 'active', // Default to 'active' if not provided
    });

    // Save the new subscription plan to the database
    await newPlan.save();

    // Return success response
    res.status(201).json({
      message: 'Subscription plan created successfully',
      plan: newPlan,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

