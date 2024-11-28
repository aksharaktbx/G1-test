import React, { useState } from 'react';

function AddQuestion() {
  // State for form fields
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [examType, setExamType] = useState('easy');  // Default exam type
  const [isPremium, setIsPremium] = useState(false); // Default to free question

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const questionData = {
      question,
      options: [option1, option2, option3, option4],
      correctAnswer,
      examType,
      isPremium,
    };
    console.log('Question Added:', questionData);
    
    // Reset form fields after submission
    setQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setCorrectAnswer('');
    setExamType('easy');
    setIsPremium(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white  rounded-lg">
      <h2 className="text-xl font-semibold mb-8 text-center text-indigo-600">Add New Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Question Text */}
        <div className="space-y-2">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            id="question"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        {/* Answer Options */}
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

        {/* Correct Answer */}
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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        {/* Exam Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Exam Type</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="easy"
                checked={examType === 'easy'}
                onChange={() => setExamType('easy')}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Easy</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="hard"
                checked={examType === 'hard'}
                onChange={() => setExamType('hard')}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Hard</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="hardest"
                checked={examType === 'hardest'}
                onChange={() => setExamType('hardest')}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Hardest</span>
            </label>
          </div>
        </div>

        {/* Free or Premium */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Question Type</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="free"
                checked={!isPremium}
                onChange={() => setIsPremium(false)}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Free</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="premium"
                checked={isPremium}
                onChange={() => setIsPremium(true)}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Premium</span>
            </label>
          </div>
        </div>
<hr />
        {/* Submit Button */}
        <div className="w-full mt-2">
  <button
    type="submit"
    className="py-3 p-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out max-w-xs"
  >
    Add Question
  </button>
</div>


      </form>
    </div>
  );
}

export default AddQuestion;
  