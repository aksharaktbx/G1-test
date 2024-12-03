import React, { useState, useEffect } from 'react';
import Navhead from '../Navhead';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
  const location = useLocation();
  const { userId, testId } = location.state || {};

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-result/dd438071-85d2-4e3f-8392-b9cd1da9e50a/674e973114b50705e577ffe9');
       console.log(response.data)
       
        setResult(response.data);
      } catch (err) {
        setError('Failed to fetch result');
        console.error(err);
      }
    };

    
      fetchResult();
    
  }, []);

  if (error) return <p>{error}</p>;

  if (!result) return <p>Loading...</p>;

  const { message, score, correctAnswers, wrongAnswers, passed, totalQuestions, answeredQuestions } = result;

  return (
    <>
      <Navhead />
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">How to Pass The First Time</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Practice with the free tests</li>
              <li>Unlock the Premium tests</li>
              <li>Review our Premium Cheat Sheets</li>
            </ul>
            <div className="mt-6">
              <img alt="G1 Exam Questions and Ontario Road Signs books" className="w-full mb-4" height={400} src="https://storage.googleapis.com/a1aa/image/MOaxbSBDMh4iCxybObr3vpmGHIRkmIZD1pa7EbTt7UEyyy9E.jpg" width={300} />
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
                Pass The First Time With Premium
              </button>
              <p className="text-center mt-2 text-sm">
                100% Money Back
                <a className="text-blue-600 underline" href="#">Pass Guarantee</a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
            <div className="flex items-center mb-4">
              <div className={`text-4xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                {score}
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">{passed ? 'You passed! 🎉' : 'Not enough to pass :-('}</h2>
                <div className="flex items-center mt-2">
                  <div className="w-1/2 bg-green-200 h-2 rounded-l-lg"></div>
                  <div className="w-1/2 bg-red-400 h-2 rounded-r-lg"></div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <div>{correctAnswers} Correct</div>
                  <div>{wrongAnswers} Incorrect</div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <img alt="Police officer illustration" className="w-16 h-16" height={100} src="https://storage.googleapis.com/a1aa/image/GerzXDGYeLkEdEFIyykOefYQu8XyWgct7Vp805UwqvFmsscPB.jpg" width={100} />
              <div className="ml-4">
                <p className="text-gray-600">
                  {passed ? 'Great job! You passed the test. Keep it up!' : 'Well, you can\'t win them all the time. I mean, you also can\'t slap a tiger in the face and expect to walk away. Baby steps, you know?'}
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                {passed ? 'Celebrate! You Passed!' : 'Next Up: G1 Practice Test 1'}
              </button>
            </div>

            <div className="text-center mb-4">
              <a className="text-blue-600 underline" href="#">
                Go back to all tests
              </a>
            </div>

            <h3 className="text-lg font-bold mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Restart this test</h4>
                <p className="text-gray-600">Want to revisit the same questions you just did? Take this test again.</p>
                <button className="text-blue-600 underline mt-2">Restart</button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Review your answers</h4>
                <p className="text-gray-600">See the answers you chose and what the correct answers are.</p>
                <button className="text-blue-600 underline mt-2">Review</button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Work on the questions you didn't get right</h4>
                <p className="text-gray-600">Go through all your mistakes in all the tests you've taken so far.</p>
                <button className="text-blue-600 underline mt-2">Challenge Bank</button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Find out what your Passing Probability is</h4>
                <p className="text-gray-600">See how you can improve your chances of passing the official exam.</p>
                <button className="text-blue-600 underline mt-2">Passing Probability</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
