import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        setLoading(true); // Set loading to true while fetching
        const testNamesResponse = await axios.get('http://localhost:5000/test-name');
        const fetchedTestNames = testNamesResponse.data.data.map((test) => ({
          testName: test.testName,
          testId: test._id, // Assuming each test has an '_id' field
        }));

        setTestNames(fetchedTestNames);

        // Automatically select the first test in the list
        if (fetchedTestNames.length > 0) {
          setSelectedTestId(fetchedTestNames[0].testId);
        }
      } catch (error) {
        console.error('Error fetching test names:', error);
        setError('Failed to fetch test names');
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchTestNames(); // Call the fetch function
  }, []);

  // Handle button click: set the selected test ID manually
  const handleTestClick = (test) => {
    setSelectedTestId(test.testId);
  };

  return (
    <>
      <div className="max-w-5xl rounded-full mx-auto p-4  ">
        {/* Loading and Error Handling */}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {/* Buttons for Tests */}
        <div className="flex justify-center space-x-4 mb-8 ">
          {testNames.length > 0 ? (
            testNames.map((test, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition ${
                  selectedTestId === test.testId
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-300'
                }`}
                onClick={() => handleTestClick(test)}
              >
                {test.testName}
              </button>
            ))
          ) : (
            !loading && <p>No test names available</p>
          )}
        </div>

        {/* Render CarTest with selected test ID */}
        {selectedTestId && <CarTest testId={selectedTestId} />}
      </div>
    </>
  );
}

export default Tabbar;
