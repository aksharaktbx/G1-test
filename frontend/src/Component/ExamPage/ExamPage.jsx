import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navhead from '../Navhead';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ExamPage() {
  const location = useLocation();
  const { testId, userId } = location.state || {};
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [testData, setTestData] = useState(null);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userProgress, setUserProgress] = useState({
    answeredQuestions: [],
    progress: 0,
    totalQuestions: 0,
  });
  const imageUrl = 'https://s.g1.ca/wp-content/uploads/autotest/202009250440237215.jpg';

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getUserTestProgress?userId=${userId}&testId=${testId}`
        );
        const { answeredQuestions, progress, totalQuestions, status } = response.data;

        setUserProgress({ answeredQuestions, progress, totalQuestions });
        setCompletedQuestions(answeredQuestions);
        setCurrentQuestionIndex(progress);
        if (status === 'Complete') {
          
          setTimeout(() => {
            navigate('/result', { state: { userId, testId } });
          }, 2000);        }
        else{
          console.log('hello')
        }
   
      } catch (err) {
        console.error('Failed to fetch user progress:', err);
        setError('Failed to fetch user progress');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, [testId, userId,navigate]);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/gettest/${testId}`);
        const { test } = response.data;

        setTestData(test);
      } catch (err) {
        console.error('Failed to fetch test data:', err);
        setError('Failed to fetch test data');
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
    if (!answer) {
      alert('Please select an answer before submitting.');
      return;
    }

    const dataToSubmit = { userId, testId, answer: { questionId, answer } };

    try {
      const response = await axios.post('http://localhost:5000/submit-answers', dataToSubmit);
      const { message, isCorrect, progress, status } = response.data;

      console.log(message);
      if (status === 'Complete') {
        navigate('/result', { state: { userId, testId } });
      }
      else{
        console.log('hello')
      }
      setUserProgress((prev) => ({
        ...prev,
        progress,
      }));

      setCompletedQuestions((prev) => [
        ...prev,
        { questionId, isCorrect },
      ]);

      setAnswers((prevAnswers) =>
        prevAnswers.map((ans) =>
          ans.questionId === questionId ? { ...ans, isCorrect } : ans
        )
      );

      if (status === 'Complete') {
        navigate('/result', { state: { userId, testId } });
      }
    } catch (err) {
      console.error('Error submitting answers:', err);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < testData?.questionIds.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert('You have completed all questions!');
    }
  };

  const renderQuestionNumbers = () => {
    if (!testData || !testData.questionIds) {
      return null;
    }

    return testData.questionIds.map((question, index) => {
      const answeredQuestion = completedQuestions.find(
        (q) => q.questionId === question._id
      );

      const isAnswered = !!answeredQuestion;
      const isCorrect = answeredQuestion?.isCorrect;

      const bgColor = currentQuestionIndex === index
        ? 'bg-indigo-500 text-white'
        : isAnswered
        ? isCorrect
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white'
        : 'bg-gray-200';

      return (
        <div
          key={index}
          className={`w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer ${bgColor}`}
          onClick={() => setCurrentQuestionIndex(index)}
        >
          {index + 1}
        </div>
      );
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navhead />
      <div className="max-w-7xl mt-10 mx-auto  mb-10">
        <div className="flex w-full justify-between ">
          <div className="md:w-1/4  rounded-lg mb-4 md:mb-0">


          
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Your Progress</h2>
              <div className="grid grid-cols-5 gap-2 text-center">{renderQuestionNumbers()}</div>
            </div>
          </div>
          <div className="md:w-3/4 pl-0 md:pl-6 mx-0 md:mx-20   ">
            {testData && testData.questionIds && testData.questionIds.length > 0 ? (
              <div className="mb-6 w-full border bg-white p-2 rounded-lg">
                <img
                  src={imageUrl}
                  alt="question"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <h2 className="text-2xl font-semibold mb-4">
                  {testData.questionIds[currentQuestionIndex]?.questionText || 'Question not available'}
                </h2>
                <div className="space-y-2">
                  {testData.questionIds[currentQuestionIndex]?.options.map((option, optionIndex) => {
                    const answeredQuestion = completedQuestions.find(
                      (q) => q.questionId === testData.questionIds[currentQuestionIndex]?._id
                    );

                    const isAnswered = !!answeredQuestion;
                    const isCorrect = answeredQuestion?.isCorrect;

                    const optionStyle = isAnswered
                      ? option === answeredQuestion.answer
                        ? isCorrect
                          ? 'bg-green-100'
                          : 'bg-red-100'
                        : option === testData.questionIds[currentQuestionIndex]?.correctAnswer
                        ? 'bg-green-100'
                        : ''
                      : '';

                    return (
                      <label
                        key={optionIndex}
                        className={`flex items-center hover:bg-indigo-100 p-3 rounded-lg ${optionStyle}`}
                      >
                        <input
                          type="radio"
                          name={testData.questionIds[currentQuestionIndex]?._id}
                          value={option}
                          onChange={() =>
                            handleAnswerChange(
                              testData.questionIds[currentQuestionIndex]?._id,
                              option
                            )
                          }
                          disabled={completedQuestions.some(
                            (q) => q.questionId === testData.questionIds[currentQuestionIndex]?._id
                          )}
                          className="mr-2"
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
                <button
              onClick={handleNextQuestion}
              className="bg-indigo-500 text-white px-4 py-2 mt-3 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Next
            </button>
              </div>
            ) : (
              <p>No questions available.</p>
            )}
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExamPage;
