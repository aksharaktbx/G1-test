import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddTest = () => {
  const [testNames, setTestNames] = useState([]);
  const [testLevels, setTestLevels] = useState([]);
  const [testTitles, setTestTitles] = useState([]);
  const [selectedTestName, setSelectedTestName] = useState('');
  const [selectedTestLevel, setSelectedTestLevel] = useState('');
  const [selectedTestTitle, setSelectedTestTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalQuestion, setTotalQuestion] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [testDescription, setTestDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testNamesResponse = await axios.get('http://localhost:5000/test-name');
        setTestNames(testNamesResponse.data.data);
      } catch (err) {
        console.error("Error fetching test names:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedTestName) {
      const fetchTestLevels = async () => {
        try {
          const testLevelsResponse = await axios.get(`http://localhost:5000/testlevels/testname/${selectedTestName}`);
          setTestLevels(testLevelsResponse.data.data);
        } catch (err) {
          console.error("Error fetching test levels:", err);
        }
      };

      fetchTestLevels();
    }
  }, [selectedTestName]);

  useEffect(() => {
    if (selectedTestLevel) {
      const fetchTestTitles = async () => {
        try {
          const testTitlesResponse = await axios.get(`http://localhost:5000/testtitles/testlevel/${selectedTestLevel}`);
          setTestTitles(testTitlesResponse.data.data);
        } catch (err) {
          console.error("Error fetching test titles:", err);
        }
      };

      fetchTestTitles();
    }
  }, [selectedTestLevel]);

  const fetchQuestions = async () => {
    if (selectedTestName && selectedTestLevel && selectedTestTitle) {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/testquestions/${selectedTestName}/${selectedTestLevel}/${selectedTestTitle}`);
        setQuestions(response.data.questions);
        setTotalQuestion(response.data.totalQuestions);
      } catch (err) {
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [selectedTestName, selectedTestLevel, selectedTestTitle]);

  const handleCreateTest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/createtest', {
        testNameId: selectedTestName,
        testLevelId: selectedTestLevel,
        testTitleId: selectedTestTitle,
        testDescription: testDescription
      });
      alert('Test created successfully!');
      setShowModal(false);
    } catch (err) {
      console.error("Error creating test:", err);
      alert('Failed to create test.');
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-8 text-indigo-600">Create Test</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Test Name Dropdown */}
          <div className="space-y-2">
            <label htmlFor="testName" className="block text-sm font-medium text-gray-700">
              Select Test Name
            </label>
            <select
              id="testName"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={selectedTestName}
              onChange={(e) => setSelectedTestName(e.target.value)}
              required
            >
              <option value="">Select Test Name</option>
              {testNames.map((test) => (
                <option key={test._id} value={test._id}>
                  {test.testName}
                </option>
              ))}
            </select>
          </div>

          {/* Test Level Dropdown */}
          <div className="space-y-2">
            <label htmlFor="testLevel" className="block text-sm font-medium text-gray-700">
              Select Test Level
            </label>
            <select
              id="testLevel"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={selectedTestLevel}
              onChange={(e) => setSelectedTestLevel(e.target.value)}
              required
            >
              <option value="">Select Test Level</option>
              {testLevels.map((level) => (
                <option key={level._id} value={level._id}>
                  {level.testLevelName}
                </option>
              ))}
            </select>
          </div>

          {/* Test Title Dropdown */}
          <div className="space-y-2">
            <label htmlFor="testTitle" className="block text-sm font-medium text-gray-700">
              Select Test Title
            </label>
            <select
              id="testTitle"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={selectedTestTitle}
              onChange={(e) => setSelectedTestTitle(e.target.value)}
              required
            >
              <option value="">Select Test Title</option>
              {testTitles.map((title) => (
                <option key={title._id} value={title._id}>
                  {title.testTitleName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="container flex justify-between items-center mt-4">
          <h3 className="question-count text-lg text-gray-800">Total Questions: {totalQuestion}</h3>
          <button
            className="outlined-button px-6 py-2 border-2 border-blue-500 bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-transparent hover:text-blue-500 hover:border-blue-500"
            onClick={() => setShowModal(true)}
          >
            Create
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center mt-4 mb-4">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <div className="mt-4">
            {questions.length > 0 ? (
              questions.map((question, index) => (
                <div key={question._id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{index + 1}. {question.questionText}</h3>
                  <ul className="list-disc pl-5 mt-2">
                    {question.options.map((option, index) => (
                      <li key={index} className={option === question.correctAnswer ? 'text-green-500' : ''}>
                        {option}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Correct Answer: {question.correctAnswer}</p>
                  {question.image && (
                    <img
                      src={`http://localhost:5000/uploads/${question.image}`}
                      alt={`Image related to the question: ${question.questionText}`}
                      className="mt-2 rounded-lg"
                    />
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No questions available.</p>
            )}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Create Test</h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter test description"
              value={testDescription}
              onChange={(e) => setTestDescription(e.target.value)}
              rows="4"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleCreateTest}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTest;