import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API calls
import CarTest from './Tabs/CarTest'; // Adjust the import path as necessary

function Tabbar() {
  const [testNames, setTestNames] = useState([]); // State to store fetched test names
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedTestId, setSelectedTestId] = useState(null); // Track the selected test ID

  // Fetch test names
  useEffect(() => {
    const fetchTestNames = async () => {
      try {
        // Make the GET request to fetch the test names
        const testNamesResponse = await axios.get('http://localhost:5000/test-name');
        
        // Assuming the response has a 'data' property with a 'data' field containing the test names and IDs
        const fetchedTestNames = testNamesResponse.data.data.map((test) => ({
          testName: test.testName,
          testId: test._id, // Assuming each test has an 'id' field
        }));
        console.log(fetchedTestNames);
        
        // Update the state with the fetched test names
        setTestNames(fetchedTestNames);
      } catch (error) {
        console.error('Error fetching test names:', error);
        setError('Failed to fetch test names');
      }
    };

    // Call the fetchTestNames function
    fetchTestNames();
  }, []);

  // Handle button click: fetch data based on selected test ID

  // Handle the click event to set the selected test ID
  const handleTestClick = (test) => {
    setSelectedTestId(test.testId); // Update the selected test ID
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
       
        <div className="flex justify-center space-x-4 mb-8">
          {/* Dynamically render buttons for each test */}
          {testNames.length > 0 ? (
            testNames.map((test, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition ${
                  selectedTestId === test.testId
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-300'
                }`}
                onClick={() => handleTestClick(test)} // Update selectedTestId and fetch data on click
              >
                {test.testName}
              </button>
            ))
          ) : (
            <p>No test names available</p>
          )}
        </div>

        {/* Conditionally render CarTest only when a test is selected */}
        {selectedTestId && <CarTest testId={selectedTestId} />}
      </div>
    </>
  );
}

export default Tabbar;
