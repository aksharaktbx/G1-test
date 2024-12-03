import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation (v6)
import Navhead from '../Navhead';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ExamPage() {
  const location = useLocation();
  const { testId, userId } = location.state || {};
  const navigate = useNavigate();  // Initialize useNavigate

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [testData, setTestData] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answerStatus, setAnswerStatus] = useState([]);
  const imageUrl = 'https://s.g1.ca/wp-content/uploads/autotest/202009250440237215.jpg';

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/gettest/${testId}`);
        const { test } = response.data;

        setTestData(test);
        setCompletedQuestions([]);
        setCurrentQuestionIndex(0);
      } catch (err) {
        setError('Failed to fetch test data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestData();
  }, [testId]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find((ans) => ans.questionId === questionId);
      if (existingAnswer) {
        return prevAnswers.map((ans) =>
          ans.questionId === questionId ? { ...ans, answer } : ans
        );
      } else {
        return [...prevAnswers, { questionId, answer }];
      }
    });

    handleSubmit(questionId, answer);
  };

  const handleSubmit = async (questionId, answer) => {
    const currentQuestion = testData?.questionIds[currentQuestionIndex];

    if (!answer) {
      alert('Please select an answer before submitting.');
      return;
    }

    const dataToSubmit = { userId, testId, answer: { questionId, answer } };

    try {
      const response = await axios.post('http://localhost:5000/submit-answers', dataToSubmit);
      const { message, isCorrect, progress } = response.data;

      console.log(message); // Log response message

      setAnswerStatus((prevStatus) => [
        ...prevStatus,
        { questionId: currentQuestion._id, isCorrect },
      ]);

      setCompletedQuestions((prev) => [...prev, currentQuestionIndex]);

      if (isCorrect) {
        alert(`Correct Answer! Progress: ${progress}`);
      } else {
        alert(`Incorrect Answer! Progress: ${progress}`);
      }

      // Navigate to result page once all questions are answered
      if (progress === testData?.questionIds.length) {
        navigate({
          pathname: '/result',
          state: { userId, testId },  // Passing userId and testId to result page
        });
      }
    } catch (err) {
      console.error('Error submitting answers:', err);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < testData?.questionIds.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert('You have completed all questions!');
    }
  };

  const renderQuestionNumbers = () => {
    if (!testData || !testData.questionIds) {
      return null;
    }

    return testData.questionIds.map((_, index) => (
      <div
        key={index}
        className={`w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer ${
          currentQuestionIndex === index
            ? 'bg-indigo-500 text-white'
            : completedQuestions.includes(index)
            ? answerStatus[index]?.isCorrect
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
            : 'bg-gray-200'
        }`}
        onClick={() => setCurrentQuestionIndex(index)}
      >
        {index + 1}
      </div>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navhead />
      <div className="max-w-6xl mt-10 mx-auto bg-white mb-10">
        <div className="flex w-full justify-between border">
          {/* Left Side: Question Progress Box */}
          <div className="md:w-1/4 bg-gray-200 p-4 rounded-lg mb-4 md:mb-0">
            <div className="mb-4 flex justify-between items-center">
              <button className="text-gray-500 bg-gray-200 rounded-lg p-3">
                <i className="fas fa-arrow-left"></i> All Tests
              </button>
              <button className="text-gray-500 bg-gray-200 rounded-lg p-3">
                <i className="fas fa-redo"></i> Restart
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Your Progress</h2>
              <div className="grid grid-cols-5 gap-2 text-center">
                {renderQuestionNumbers()}
              </div>
            </div>
          </div>

          {/* Right Side: Question Box */}
          <div className="md:w-3/4 pl-0 md:pl-6 mx-0 md:mx-20 border">
            {testData && testData.questionIds.length > 0 && (
              <div
                className={`mb-6 w-full border rounded-lg ${
                  currentQuestionIndex === 0 ? 'border-indigo-500' : 'border-gray-300'
                }`}
              >
                <img
                  src={imageUrl}
                  alt="question"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">
                  {testData.questionIds[currentQuestionIndex].questionText}
                </h2>
                <div className="space-y-2">
                  {testData.questionIds[currentQuestionIndex].options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className="flex items-center hover:bg-indigo-100 p-3 rounded-lg"
                    >
                      <input
                        type="radio"
                        name={testData.questionIds[currentQuestionIndex]._id}
                        value={option}
                        onChange={() => handleAnswerChange(testData.questionIds[currentQuestionIndex]._id, option)}
                        className="mr-2"
                        checked={answers.find(
                          (ans) => ans.questionId === testData.questionIds[currentQuestionIndex]._id
                        )?.answer === option}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Next Button */}
            <button
              onClick={handleNextQuestion}
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExamPage;
