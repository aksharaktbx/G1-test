const PurchasedPlan = require('../modal/Usersubscriptionmodal'); // Adjust the path as needed

// Controller to create a purchased plan
exports.createPurchasedPlan = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      userId,
      planId,
      planName,
      price,
      purchaseDate,
      startDate,
      endDate,
      transactionDetails,
      status
    } = req.body;

    // Create a new purchased plan instance
    const newPurchasedPlan = new PurchasedPlan({
      userId,
      planId,
      planName,
      price,
      purchaseDate,
      startDate,
      endDate,
      transactionDetails,
      status
    });

    // Save the new purchased plan to the database
    await newPurchasedPlan.save();

    // Return success response
    return res.status(201).json({
      message: 'Purchased plan created successfully!',
      purchasedPlan: newPurchasedPlan
    });
  } catch (error) {
    // Handle errors and return a failure response
    console.error(error);
    return res.status(500).json({
      message: 'Failed to create purchased plan',
      error: error.message
    });
  }
};
