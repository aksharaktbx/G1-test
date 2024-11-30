import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddQuestion() {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [testNames, setTestNames] = useState([]);
  const [testLevels, setTestLevels] = useState([]);
  const [testTitles, setTestTitles] = useState([]);
  const [selectedTestName, setSelectedTestName] = useState('');
  const [selectedTestLevel, setSelectedTestLevel] = useState('');
  const [selectedTestTitle, setSelectedTestTitle] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = new FormData();

    questionData.append('questionText', question);
    questionData.append('correctAnswer', correctAnswer);
    questionData.append('testName', selectedTestName);
    questionData.append('testLevel', selectedTestLevel);
    questionData.append('testTitle', selectedTestTitle);

    [option1, option2, option3, option4].forEach((option) => {
      questionData.append('options[]', option);
    });

    if (image) {
      questionData.append('image', image);
    }

    try {
      setLoading(true);
      setError(null);
      const response = await fetch('http://localhost:5000/add', {
        method: 'POST',
        body: questionData,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Question added successfully!');
        setSuccess('Question added successfully!');
        setQuestion('');
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
        setCorrectAnswer('');
        setImage(null);
        setSelectedTestName('');
        setSelectedTestLevel('');
        setSelectedTestTitle('');
      } else {
        setError(result.message || 'Failed to add question');
      }
    } catch (err) {
      setError('An error occurred while submitting the question');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
    <h1 className="text-xl font-semibold mb-8  text-indigo-600">Add New Question</h1>
    
    <div className="w-full mx-auto bg-white rounded-lg   shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4  p-3">
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

        <div className="space-y-2">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <textarea
            id="question"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[option1, option2, option3, option4].map((option, index) => (
            <div key={index} className="space-y-2">
              <label htmlFor={`option${index + 1}`} className="block text-sm font-medium text-gray-700">
                Option {index + 1}
              </label>
              <input
                type="text"
                id={`option${index + 1}`}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={option}
                onChange={(e) => {
                  if (index === 0) setOption1(e.target.value);
                  if (index === 1) setOption2(e.target.value);
                  if (index === 2) setOption3(e.target.value);
                  if (index === 3) setOption4(e.target.value);
                }}
                required
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label htmlFor="correctAnswer" className="block text-sm font-medium text-gray-700">Correct Answer</label>
          <select
            id="correctAnswer"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          >
            <option value="">Select Correct Answer</option>
            <option value={option1}>Option 1: {option1}</option>
            <option value={option2}>Option 2: {option2}</option>
            <option value={option3}>Option 3: {option3}</option>
            <option value={option4}>Option 4: {option4}</option>
          </select>
        </div>

       

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          {image && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview of the uploaded image"
                className="w-32 h-32 object-cover border border-gray-300 rounded-lg"
              />
            </div>
          )}
        </div>

        <hr />

        <div className="w-full mt-2">
          <button
            type="submit"
            className="py-3 p-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out max-w-xs"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Question'}
          </button>
        </div>
      </form>

      {success && <div className="mt-4 text-green-600">{success}</div>}
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
    </>
  );
}

export default AddQuestion;