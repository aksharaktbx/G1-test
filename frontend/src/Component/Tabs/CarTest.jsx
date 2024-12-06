import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallCard from '../Custom/SmallCards';
import LargCard from '../Custom/LargCard';

function CarTest({ testId }) {
  const [testData, setTestData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch test data based on testId
  const fetchTestData = async (testNameId) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/gettests/${testNameId}`);

      if (!response.ok) {
        throw new Error('Failed to fetch test data');
      }

      const data = await response.json();

      if (Array.isArray(data.testsName)) {
        setTestData(data.testsName);
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

  // Fetch data when testId changes
  useEffect(() => {
    if (testId) {
      fetchTestData(testId);
    }
  }, [testId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* Introduction Section */}
      <div className="text-center pb-4">
        <h1 className="text-4xl font-semibold">Start your G1 Test Preparation</h1>
        <p className="mt-3 text-gray-600">
          {testData?.[0]?.testName?.description || 'Loading...'}
        </p>
        {testData?.[0] && (
          <Link to={`/home/g1-free-test/${testData[0]._id}`}>
            <button className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-700 mt-3 px-4">
              Next test: G1 practice test
            </button>
          </Link>
        )}
      </div>

      {/* Diagnostic Test Section */}
      <div className="mt-5">
        <h1 className="text-2xl font-bold">
          {testData?.[0]?.testLevel?.testLevelName || 'Loading...'}
        </h1>
        {testData?.[0] && (
          <Link to={`/home/g1-free-test/${testData[0]._id}`}>
            <LargCard
              imageSrc={`http://localhost:5000/uploads/${
                testData[0]?.testTitle?.image || 'placeholder.png'
              }`}
              title={testData[0]?.testTitle?.testTitleName || 'Loading...'}
              description={testData[0]?.testTitle?.testTitleDescription || 'Loading...'}
              questionsCount={testData[0]?.totalQuestions || 0}
              mistakesAllowed={testData[0]?.mistakesAllowed || 0}
            />
          </Link>
        )}
      </div>

      {/* Easy Section */}
      <div className="mt-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Easy</h1>
          <p className="text-gray-500 text-sm">Complete all 160 questions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testData &&
            testData.map((test, index) => {
              if (index > 0 && index <= 3) { // Render only indexes 1, 2, 3
                return (
                  <Link key={test._id} to={`/home/g1-free-test/${test._id}`}>
                    <SmallCard
                      imgSrc={`http://localhost:5000/uploads/${
                        test?.testTitle?.image || 'placeholder.png'
                      }`}
                      title={test?.testTitle?.testTitleName || 'Loading...'}
                      description={test?.testTitle?.testTitleDescription || 'Loading...'}
                      questionsCount={test?.totalQuestions || 0}
                      mistakesAllowed={test?.mistakesAllowed || 0}
                    />
                  </Link>
                );
              }
              return null;
            })}
        </div>
      </div>

      {/* Additional Diagnostic Test Section */}
      <div className="mt-5">
        {testData?.[4] && (
          <Link to={`/home/g1-free-test/${testData[4]._id}`}>
            <LargCard
              imageSrc={`http://localhost:5000/uploads/${
                testData[4]?.testTitle?.image || 'placeholder.png'
              }`}
              title={testData[4]?.testTitle?.testTitleName || 'Loading...'}
              description={testData[4]?.testTitle?.testTitleDescription || 'Loading...'}
              questionsCount={testData[4]?.totalQuestions || 0}
              mistakesAllowed={testData[4]?.mistakesAllowed || 0}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default CarTest;
