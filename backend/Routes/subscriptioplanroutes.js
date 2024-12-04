const express = require('express');
const router = express.Router();
const createSubscriptionPlan  = require('../controller/Createsubscriptionplan'); // Import the controller

// Define the route for creating a subscription plan
router.post('/subscription-plans', createSubscriptionPlan.createSubscriptionPlan);

module.exports = router;
