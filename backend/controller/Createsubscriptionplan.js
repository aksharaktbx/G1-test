const Plan = require('../modal/Subscriptionplanmodal'); // Adjust path as needed

// Controller to create a new plan
exports.createPlan = async (req, res) => {
  try {
    // Destructure fields from the request body
    const { name, duration, price, currency, features, accessLevel, status } = req.body;

    // Create a new plan instance
    const newPlan = new Plan({
      name,
      duration,
      price,
      currency,
      features,
      accessLevel,
      status
    });

    // Save the new plan to the database
    await newPlan.save();

    // Return success response
    return res.status(201).json({
      message: 'Plan created successfully!',
      plan: newPlan
    });
  } catch (error) {
    // Handle errors and return a failure response
    console.error(error);
    return res.status(500).json({
      message: 'Failed to create plan',
      error: error.message
    });
  }
};
// Controller to update an existing plan
exports.updatePlan = async (req, res) => {
  try {
    const { planId } = req.params;  // Extract the planId from the URL parameters
    const { name, duration, price, currency, features, accessLevel, status } = req.body;  // Fields to update

    // Find the plan and update its fields
    const updatedPlan = await Plan.findByIdAndUpdate(
      planId,
      {
        name,
        duration,
        price,
        currency,
        features,
        accessLevel,
        status
      },
      { new: true }  // This option returns the updated plan after modification
    );

    if (!updatedPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    // Return success response with the updated plan
    return res.status(200).json({
      message: 'Plan updated successfully!',
      plan: updatedPlan
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to update plan',
      error: error.message
    });
  }
};


// Controller to fetch all plans
exports.getPlans = async (req, res) => {
  try {
    // Fetch all plans from the database
    const plans = await Plan.find();

    // Return success response with plans
    return res.status(200).json({
      message: 'Plans fetched successfully!',
      plans
    });
  } catch (error) {
    // Handle errors and return a failure response
    console.error(error);
    return res.status(500).json({
      message: 'Failed to fetch plans',
      error: error.message
    });
  }
};