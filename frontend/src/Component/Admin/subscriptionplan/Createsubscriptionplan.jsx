import React, { useState } from 'react';

const Createsubscriptionplan = () => {
  const [formData, setFormData] = useState({
    name: '', // Ensure name starts as an empty string
    duration: '',
    price: '',
    currency: 'USD',
    features: '',
    accessLevel: 'Full',
    status: 'Active',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (
      !formData.name ||
      !formData.duration ||
      !formData.price ||
      !formData.features ||
      !formData.accessLevel
    ) {
      alert('Please fill out all fields.');
      console.error('Missing Fields:', formData);
      return;
    }

    // Log the form data for debugging
    console.log("Submitting Form Data:", {
      ...formData,
      features: formData.features.split(',').map((feature) => feature.trim()), // Features as array
    });

    try {
      const response = await fetch('http://localhost:5000/api/subscription-plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          features: formData.features.split(',').map((feature) => feature.trim()), // Ensure features are split into an array
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Subscription plan created successfully!');
        setFormData({
          name: '',
          duration: '',
          price: '',
          currency: 'USD',
          features: '',
          accessLevel: 'Full',
          status: 'Active',
        });
      } else {
        console.error('Error response from server:', result);
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error creating subscription plan:', error);
      alert('Failed to create the subscription plan. Please try again.');
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Create Subscription Plan</h2>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <form id="subscriptionForm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Plan Name
              </label>
              <select
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-full border border-gray-200 rounded-l py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                required
              >
                <option value="" disabled>
                  Select a Plan Name
                </option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Lifetime">Lifetime</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">
                Duration (in days)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="currency" className="block text-gray-700 font-bold mb-2">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                required
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="features" className="block text-gray-700 font-bold mb-2">
                Features (comma-separated)
              </label>
              <input
                type="text"
                id="features"
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                className="block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                placeholder="Feature 1, Feature 2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="accessLevel" className="block text-gray-700 font-bold mb-2">
                Access Level
              </label>
              <input
                type="text"
                id="accessLevel"
                name="accessLevel"
                value={formData.accessLevel}
                onChange={handleInputChange}
                className="block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Createsubscriptionplan;
