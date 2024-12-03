import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SmallCard from '../Custom/SmallCards';
import LargCard from '../Custom/LargCard';
import { Link } from 'react-router-dom';

function CarTest({ testId }) {
  const [testData, setTestData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedTest, setSelectedTest] = useState(null); // State to store selected test data

  console.log(testId);

  // Fetch test data based on the selected testId (handling box click)
  const handleBoxClick = async (testNameId) => {
    console.log('Clicked Test Name ID:', testNameId);
    setLoading(true);
    setTestData(null); // Clear previous test data

    try {
      const response = await fetch(`http://localhost:5000/gettests/${testNameId}`);
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to fetch test data');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Log the parsed data to the console
      console.log('Response Data:', data.testsName);
  
      // Assuming the response has an array of tests under data.testsName
      if (Array.isArray(data.testsName)) {
        setTestData(data.testsName); // Update the testData state with the fetched data
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

  useEffect(() => {
    if (testId) {
      handleBoxClick(testId); // Call the handleBoxClick function with testId passed from parent
    }
  }, [testId]); // Run whenever the testId prop changes

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display an error message if fetching fails
  }

  return (
    <div> 
      <h1>{testId}</h1>
      {/* Introduction Section */}
      <div className="border text-center pb-4">
        <h1 className="text-4xl font-semibold">Start your G1 Test Preparation</h1>
        <p className="mt-3 text-gray-600">
        {testData && testData[0] ? testData[0].testDescription : 'Loading...'}

        </p>
        <Link to={`/home/g1-free-test/${testData[0]._id}`} >
          <button className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-700 mt-3 px-4">
            Next test: G1 practice test
          </button>
        </Link>
      </div>

      {/* Diagnostic Test Section */}
      <div className="mt-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
          {testData && testData[0] ? testData[0].testLevel.testLevelName : 'Loading...'}
          </h1>
        </div>
        <Link >
          <LargCard
            imageSrc={`http://localhost:5000/uploads/${testData && testData[0] ? testData[0].testTitle.image
              : 'Loading...'}`} 
            title={testData && testData[0] ? testData[0].testTitle.testTitleName
              : 'Loading...'}
            description={testData && testData[0] ? testData[0].testTitle.testTitleDescription : 'Loading...'}
            questionsCount={testData && testData[0] ? testData[0].totalQuestions : 0}
            mistakesAllowed={testData && testData[0] ? testData[0].mistakesAllowed : 0}
          />
        </Link>
      </div>

      {/* Easy Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Easy</h1>
          <p className="text-gray-500 text-sm">Complete all 160 questions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SmallCard
             imgSrc={`http://localhost:5000/uploads/${testData && testData[1] ? testData[1].testTitle.image
                : 'Loading...'}`} 
              title={testData && testData[1] ? testData[1].testTitle.testTitleName
                : 'Loading...'}
              description={testData && testData[1] ? testData[1].testTitle.testTitleDescription  : 'Loading...'}
              questionsCount={testData && testData[1] ? testData[1].totalQuestions : 0}
              mistakesAllowed={testData && testData[1] ? testData[1].mistakesAllowed : 0}
          />
          <SmallCard
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGodHqydUCtigxJPN-2PWkCpbVRWzUS_w7JA&s"
            title="Practice Test 2"
            description="Questions cover roundabouts, intersections, overtaking other vehicles, and driving on highways. Two sections: Road Signs and Road Rules."
            questionRange="41-80 questions"
            mistakesAllowed="8"
          />
          <SmallCard
            imgSrc="https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-stealth-edition-02-1633475393.jpg?crop=0.671xw:1.00xh;0.125xw,0&resize=2048:*"
            title="Practice Test 3"
            description="This test challenges you on distracted driving fines, traffic lights, maximum speed limits, cell phone use, blood alcohol levels, and more."
            questionRange="81-120 questions"
            mistakesAllowed="8"
          />
        </div>
      </div>

      {/* Additional Diagnostic Test Section */}
      <div className="mt-5">
        <LargCard
          imageSrc="https://m.media-amazon.com/images/I/61Rx9tHudUL._AC_UF1000,1000_QL80_.jpg"
          title="Practice Test 4"
          description="This members-only set covers must-know topics like U-turns, railway crossings, proper use of headlights, vehicle insurance, license suspension, and demerit points."
          questionsCount="121-160"
          mistakesAllowed="8"
        />
      </div>
    </div>
  );
}

export default CarTest;
