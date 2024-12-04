import React, { useState, useEffect } from 'react';
import { FaHeart, FaShareAlt, FaEllipsisV } from 'react-icons/fa';

const Showtest = () => {
  const [tests, setTests] = useState([]);  // Ensure this is initialized as an empty array
  const [testNames, setTestNames] = useState([]);  // Ensure this is initialized as an empty array
  const [selectedTest, setSelectedTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all test names
  useEffect(() => {
    const fetchTestNames = async () => {
      try {
        const response = await fetch('http://localhost:5000/test-name');
        if (!response.ok) throw new Error('Failed to fetch test names');
        const data = await response.json();
        
        // Check if data is an array before setting it
        if (Array.isArray(data.data)) {
          setTestNames(data.data);
        } else {
          throw new Error('Invalid response format for test names');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTestNames();
  }, []);

  // Fetch all tests (initially)
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch('http://localhost:5000/gettestdata');
        if (!response.ok) throw new Error('Failed to fetch tests');
        const data = await response.json();

        // Check if data.tests is an array before setting it
        if (Array.isArray(data.tests)) {
          
        } else {
          throw new Error('Invalid response format for tests');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const handleBoxClick = async (testNameId) => {
    console.log('Clicked Test Name ID:', testNameId);
    setLoading(true);
    setSelectedTest(null); // Clear previously selected test data
  
    try {
      const response = await fetch(`http://localhost:5000/gettests/${testNameId}`);
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to fetch test data');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Log the parsed data to the console
      console.log('Response Data:', data);
  
      // Optionally, update your state with the data if it's valid
      if (Array.isArray(data.testsName)) {
        setTests(data.testsName); // Update the tests state with the fetched data
      } else {
        throw new Error('Invalid response format for tests');
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching test data:', error);
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Test List</h1>

      {/* Top boxes displaying the fetched test names */}
      <div className="flex flex-wrap justify-between gap-6  mb-4">
        {testNames && testNames.length > 0 ? (
          testNames.map((name) => (
            <div
              key={name._id}
              className=" border bg-white w-full sm:w-1/3 lg:w-1/4 p-6 text-center cursor-pointer"
              onClick={() => handleBoxClick(name._id)}  // Pass the testNameId to the click handler
            >
              <h2 className="text-xl font-semibold text-gray-800">{name.testName}</h2>
            </div>
          ))
        ) : (
          <p>No test names available.</p>
        )}
      </div>

      {/* Display the tests in cards */}
      <div className="container mx-auto">
        {tests && tests.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {tests.map((test) => (
              <div key={test._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-500 text-white flex justify-center items-center rounded-full">
                      {test.testName.testName[0]}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold">{test.testName.testName}</h2>
                    </div>
                  </div>
                  {/* Tooltip for Description */}
                  <div className="relative">
                    <button
                      className="p-2 rounded-full hover:bg-gray-100"
                      data-tooltip={test.testDescription}  // Using the tooltip data attribute
                    >
                      <FaEllipsisV className="text-gray-600" />
                    </button>
                    {/* Custom Tooltip */}
                    <div
                      className="absolute hidden p-2 bg-black text-white rounded shadow-lg w-48 text-sm z-10"
                      style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}
                    >
                      {test.testDescription}
                    </div>
                  </div>
                </div>
                <div className="w-full p-1">
                  <div className="subtest border flex justify-between">
                    <div className="">
                      <h1>Test-Level: {test.testLevel.testLevelName}</h1>
                      <h4>Test-Title: {test.testTitle.testTitleName}</h4>
                    </div>
                    <div className="flex flex-col">
                      <span>Total Questions: {test.totalQuestions}</span>
                      <span>Passing Score: {test.passingScore}%</span>
                      <span>Mistakes Allowed: {test.mistakesAllowed}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border-t border-gray-200">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <FaHeart className="text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <FaShareAlt className="text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No tests found</p>
        )}
      </div>
    </>
  );
};

export default Showtest;
