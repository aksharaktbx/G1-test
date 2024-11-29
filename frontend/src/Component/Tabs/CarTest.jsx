import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SmallCard from '../Custom/SmallCards';
import LargCard from '../Custom/LargCard';
import { Link } from 'react-router-dom';

function CarTest({ testId }) {
  const [testData, setTestData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/gettestarray/${testId}`);
        console.log(response.data.testType); // Debugging log
        setTestData(response.data.testType); // Store fetched data
      } catch (err) {
        setError('Failed to fetch data'); // Set error message
        console.error(err); // Log error for debugging
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchTestData();
  }, [testId]); // Add testId as a dependency

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display an error message if fetching fails
  }

  return (
    <div>
  

      {/* Introduction Section */}
      <div className="border text-center pb-4">
        <h1 className="text-4xl font-semibold">Start your G1 Test Preparation</h1>
        <p className="mt-3 text-gray-600"> {testData.description}
         
        </p>
        <Link to={`/home/g1-free-test/${testData.testarray[0]._id}`} ><button className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-700 mt-3 px-4">
          Next test: G1 practice test
        </button>
        </Link>
      </div>

      {/* Diagnostic Test Section */}
      <div className="mt-5">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{testData.testarray[0].testName}</h1>
        </div>
        <Link to={`/home/g1-free-test/${testData.testarray[0]._id}`}>

        <LargCard
          imageSrc="https://m.media-amazon.com/images/I/61Rx9tHudUL._AC_UF1000,1000_QL80_.jpg"
          title={testData.testarray[0].testLevelName}
          description={testData.testarray[0].testDescription}
          questionsCount={testData.testarray[0].totalQuestions   }
          mistakesAllowed=""
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
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDhN6PT71Exuhr6j6KayhENg5ofz4iXGR1A&s"
            title="Practice Test 1"
            description="A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation."
            questionRange="1-40 questions"
            mistakesAllowed="8"
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
