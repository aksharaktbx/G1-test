import React, { useState } from 'react';

function AddTest() {
  const [testName, setTestName] = useState('');
  const [testType, setTestType] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [passingMarks, setPassingMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, for example, sending the data to an API
    console.log({
      testName,
      testType,
      totalMarks,
      passingMarks,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl text-indigo-600  mb-4 text-center">Add Test</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="testName" className="block text-sm font-semibold text-gray-700">Test Name:</label>
          <input
            type="text"
            id="testName"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="testType" className="block text-sm font-semibold text-gray-700">Test Type:</label>
          <select
            id="testType"
            value={testType}
            onChange={(e) => setTestType(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Test Type</option>
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="totalMarks" className="block text-sm font-semibold text-gray-700">Total Marks:</label>
          <input
            type="number"
            id="totalMarks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            style={{
              appearance: 'none', 
              MozAppearance: 'textfield', // For Firefox
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="passingMarks" className="block text-sm font-semibold text-gray-700">Passing Marks:</label>
          <input
            type="number"
            id="passingMarks"
            value={passingMarks}
            onChange={(e) => setPassingMarks(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            style={{
              appearance: 'none', 
              MozAppearance: 'textfield', // For Firefox
            }}
          />
        </div>

        <div className="mt-4 flex justify-center">
  <button 
    type="submit" 
    className="bg-indigo-600 mt-2 text-white p-3 w-1/2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    Add Test
  </button>
</div>

      </form>
    </div>
  );
}

export default AddTest;
