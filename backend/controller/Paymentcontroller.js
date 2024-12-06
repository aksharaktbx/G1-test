const paypal = require('@paypal/checkout-server-sdk');
const Plan = require('../modal/Subscriptionplanmodal');
const PurchasedPlan = require('../modal/Usersubscriptionmodal');

// Initialize PayPal environment
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,  // Your PayPal client ID
  process.env.PAYPAL_CLIENT_SECRET  // Your PayPal client secret
);


const client = new paypal.core.PayPalHttpClient(environment);

exports.createPayment = async (req, res) => {
  const { planId } = req.body;

  try {
    // Fetch the plan details from your database
    const plan = await Plan.findById(planId);

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }

    // Create the PayPal order request
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',  // CAPTURE means you want to complete the payment after approval
      purchase_units: [
        {
          amount: {
            currency_code: plan.currency,  // Ensure the currency code is valid (e.g., USD)
            value: plan.price.toString(),  // PayPal expects the value as a string
          },
          description: `Purchase of ${plan.name} plan`,
        },
      ],
    });

    // Create the PayPal order
    const order = await client.execute(request);
    console.log('PayPal order response:', order);  // Log the full PayPal response for debugging

    // Check if the response contains the 'approve' link
    const approvalUrl = order.result.links.find(link => link.rel === 'approve')?.href;

    if (!approvalUrl) {
      console.error('Approval URL not found in the response:', order);  // Log the response for further inspection
      return res.status(400).json({ error: 'Approval URL not found in the response' });
    }

    // Send the approval URL to the client so the user can approve the payment
    res.status(200).json({
      approval_url: approvalUrl,  // This is the URL the user will use to approve the payment
      plan,
    });
  } catch (error) {
    console.error('Error creating PayPal payment:', error);
    res.status(500).json({ error: 'Server error while creating PayPal payment' });
  }
};



// Capture the payment after approval
exports.capturePayment = async (req, res) => {
  const { orderId } = req.body;

  try {
    // Capture the payment
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.prefer('return=representation');

    const capture = await client.execute(request);

    if (capture.result.status === 'COMPLETED') {
      // Payment succeeded
      res.status(200).json({ message: 'Payment successful', capture });
    } else {
      res.status(400).json({ error: 'Payment failed', status: capture.result.status });
    }
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    res.status(500).json({ error: 'Error capturing PayPal payment' });
  }
};

// Complete the purchase and save details to the database
exports.completePurchase = async (req, res) => {
  const { userId, planId, paymentStatus, transactionId } = req.body;

  try {
    if (paymentStatus === 'COMPLETED') {
      const plan = await Plan.findById(planId);

      if (!plan) {
        return res.status(404).json({ error: 'Plan not found' });
      }

      // Record the purchase in the PurchasedPlan collection
      const purchase = new PurchasedPlan({
        userId,
        planId,
        planName: plan.name,
        price: plan.price,
        purchaseDate: new Date(),
        startDate: new Date(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + plan.duration)), // Assuming `plan.duration` is in years
        transactionDetails: {
          paymentMethod: 'PayPal',
          transactionId: transactionId,  // Use the transaction ID from PayPal response
          status: 'Success',
        },
        status: 'Active',
      });

      await purchase.save();

      res.status(201).json({ message: 'Purchase successful', purchase });
    } else {
      res.status(400).json({ error: 'Payment failed' });
    }
  } catch (error) {
    console.error('Error completing the purchase:', error);
    res.status(500).json({ error: 'Error completing the purchase' });
  }
};
  