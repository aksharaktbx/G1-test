import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Managesubscription = () => {
  const [plans, setPlans] = useState([]);

  // Fetch subscription plans from the API
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/subscription-plans');
        const data = await response.json();
        if (response.ok) {
          setPlans(data.plans);
        } else {
          console.error('Failed to fetch plans:', data.message);
        }
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  // Function to create payment and redirect to PayPal
  const createPayment = async (planId) => {
    try {
      const response = await fetch('http://localhost:5000/api/createPayment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Redirect user to PayPal approval URL
        window.location.href = data.approval_url;
      } else {
        console.error('Error creating payment:', data.message);
      }
    } catch (error) {
      console.error('Error during payment creation:', error);
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="border-b flex justify-between items-center pb-2">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold mb-2">Subscription Plan</h1>
        </div>
        <Link to="/dashboard/create-subscription" className="ml-2">
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Create
          </Button>
        </Link>
      </div>

      {/* Subscription Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {plans.map((plan) => (
          <div key={plan._id} className="bg-white p-6 rounded-lg shadow-md">
            {/* Plan Title with Edit and Delete Icons */}
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold flex-1">{plan.name}</h2>
              {/* Edit Icon with Tooltip on Top */}
              <Tooltip title="Edit" placement="top" arrow>
                <EditIcon className="ml-2 cursor-pointer text-blue-600" />
              </Tooltip>
              {/* Delete Icon with Tooltip on Top */}
              <Tooltip title="Delete" placement="top" arrow>
                <DeleteIcon className="ml-2 cursor-pointer text-red-600" />
              </Tooltip>
            </div>

            <p className="text-gray-700 mb-2">Duration: {plan.duration} days</p>
            <p className="text-gray-700 mb-2">Price: {plan.currency} {plan.price}</p>
            <p className="text-gray-700">Features:</p>
            <ul className="list-disc ml-5 mb-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <p className="text-gray-600">Status: {plan.status}</p>
            
            {/* Create Payment Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => createPayment(plan._id)}
              className="mt-4"
            >
              Buy Now
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Managesubscription;
