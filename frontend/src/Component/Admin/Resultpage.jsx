import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Resultpage = () => {
  const location = useLocation();
  const { testId, userId } = location.state || {};
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (testId && userId) {
      const fetchResultData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/get-result/${userId}/${testId}`
          );
          setResultData(response.data);
        } catch (err) {
          setError(err.response?.data?.message || 'Failed to fetch test results.');
        } finally {
          setLoading(false);
        }
      };

      fetchResultData();
    } else {
      setError('Invalid progressId or userId.');
      setLoading(false);
    }
  }, [testId, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Test Result</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <i className="fas fa-download"></i> Download Results
        </button>
      </div>
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 fade-in">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-600">
                  <strong>Message:</strong> {resultData.message}
                </p>
                <p className="text-gray-600">
                  <strong>Score:</strong> {resultData.score}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <strong>Correct Answers:</strong> {resultData.correctAnswers}
                </p>
                <p className="text-gray-600">
                  <strong>Wrong Answers:</strong> {resultData.wrongAnswers}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Detailed Results
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">
                      Question ID
                    </th>
                    <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">
                      Your Answer
                    </th>
                    <th className="py-2 px-4 bg-gray-200 text-left text-gray-600 font-semibold">
                      Correct
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultData.answeredQuestions.map((question) => (
                    <tr key={question._id}>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {question.questionId}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {question.userAnswer}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {question.isCorrect ? (
                          <i className="fas fa-check text-green-500"></i>
                        ) : (
                          <i className="fas fa-times text-red-500"></i>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-600">
                  <strong>Total Questions:</strong> {resultData.totalQuestions}
                </p>
                <p className="text-gray-600">
                  <strong>Needed Correct Answers to Pass:</strong>{' '}
                  {resultData.neededCorrectAnswers}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <i className="fas fa-print"></i> Print
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resultpage;
