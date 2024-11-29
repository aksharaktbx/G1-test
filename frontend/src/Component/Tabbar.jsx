import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API calls
import CarTest from './Tabs/CarTest'; // Adjust the import path as necessary
import MotorcycleTest from './Tabs/MotorcycleTest'; // Adjust the import path as necessary
import { FaRedo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Tabbar() {
  const [activeTab, setActiveTab] = useState('carTests');
  const [testData, setTestData] = useState(null); // State to store fetched test data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch test data
  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/gettestarray');
        console.log(response.data.testType); // Log data to console for testing
        setTestData(response.data.testType); // Store the fetched data
        setLoading(false); // Stop loading
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false); // Stop loading in case of error
        console.error(err); // Log the error for debugging
      }
    };

    fetchTestData();
  }, []);

  // Get the ID for the active tab
  const getActiveTabId = () => {
    if (!testData) return null; // If testData is not loaded, return null
    const currentTest = testData.find((test) => {
      if (activeTab === 'carTests') return test.typeName === 'Car Test';
      if (activeTab === 'motorcycleTests') return test.typeName === 'Motorcycle Test';
      // Add more conditions for other tabs if needed
      return null;
    });
    return currentTest?._id || null; // Return the ID or null if not found
  };

  // Render the appropriate component for the active tab
  const renderActiveTestComponent = () => {
    const activeTabId = getActiveTabId(); // Get the ID for the active tab
    switch (activeTab) {
      case 'carTests':
        return <CarTest testId={activeTabId} />;
      case 'motorcycleTests':
        return <MotorcycleTest testId={activeTabId} />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto p-4">
        <div className=" text-center mb-4">
          <h1 className="text-2xl font-bold">Start your G1 Test Preparation</h1>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full transition ${
              activeTab === 'carTests' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('carTests')}
          >
            Car Tests
          </button>
          <button
            className={`px-4 py-2 rounded-full transition ${
              activeTab === 'motorcycleTests' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('motorcycleTests')}
          >
            Motorcycle Tests
          </button>
          <button
            className={`px-4 py-2 rounded-full transition ${
              activeTab === 'behindTheWheel' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('behindTheWheel')}
          >
            Behind-the-wheel
          </button>
        </div>

        {/* Render the active test component here */}
        <div className="mt-6">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            renderActiveTestComponent()
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabbar;
