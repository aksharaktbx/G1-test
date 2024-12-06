const express = require('express');
const router = express.Router();
const createSubscriptionPlan  = require('../controller/Createsubscriptionplan'); // Import the controller
const paymentcontroller=require('../controller/Paymentcontroller')

// Define the route for creating a subscription plan
router.post('/subscription-plans', createSubscriptionPlan.createPlan);

router.put('/plans/:planId',createSubscriptionPlan.updatePlan);

router.get('/subscription-plans', createSubscriptionPlan.getPlans);

router.post('/createPayment', paymentcontroller.createPayment);

// Route to capture the PayPal payment after approval
router.post('/capturePayment', paymentcontroller.capturePayment);

// Route to complete the purchase and save the transaction details
router.post('/completePurchase', paymentcontroller.completePurchase);

module.exports = router;
