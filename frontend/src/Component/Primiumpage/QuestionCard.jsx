import React, { useState } from 'react';

function QuestionCard() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option for each question

  const questions = [
    {
      imageUrl: "https://www.g1.ca/wp-content/uploads/autotest/202001241522542360.jpg",
      questionText: "When driving on a street designed for two-way traffic, you hear the siren of an emergency vehicle. What does the law require you to do?",
      options: [
        { id: 'option1', text: 'Speed up and get out of the way.' },
        { id: 'option2', text: 'Continue at the same speed.' },
        { id: 'option3', text: 'Signal the driver to pass.' },
        { id: 'option4', text: 'Pull to the right as far as possible and stop.' }
      ],
    },
    {
      imageUrl: "https://s.g1.ca/wp-content/uploads/autotest/202001302235285631.jpg",
      questionText: "What should you do when you see a yellow traffic light?",
      options: [
        { id: 'option1', text: 'Speed up to pass before it turns red.' },
        { id: 'option2', text: 'Stop if it is safe to do so.' },
        { id: 'option3', text: 'Signal to other drivers to stop.' },
        { id: 'option4', text: 'Ignore it and keep driving.' }
      ],
    }
  ];

  const currentQuestion = questions[questionIndex];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id); // Set selected option
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length); // This will loop through questions
    setSelectedOption(null); // Reset selected option when moving to next question
  };

  return (
    <>
      <div className='mx-auto'>
        <h1 className='text-4xl font-semibold text-center'>Rewire your brain to spot tricky questions</h1>
        <p className='mt-4 text-center mx-auto text-lg  break-words'>Exam questions can be tricky with their specific phrasing. Instead of mere rote learning, truly understand and navigate these intricacies. Try it out and see how you can become exam-ready.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm mx-auto p-6 max-w-7xl">
        <img
          src={currentQuestion.imageUrl}
          alt="Question Image"
          className="rounded-t-lg h-600 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">{currentQuestion.questionText}</h2>
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center p-3 hover:bg-indigo-100 rounded-2xl">
                <input
                  type="radio"
                  id={option.id}
                  name="question"
                  className="mr-2 mx-2 "
                  checked={selectedOption === option.id} // Check if the option is selected
                  onChange={handleOptionChange} // Update selected option
                />
                <label
                  htmlFor={option.id}
                  className="text-gray-700 mx-5 "
                >
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleNextQuestion}
            className="text-indigo-600 font-semibold"
          >
            Show me another question
          </button>
        </div>
      </div>
    </>
  );
}

export default QuestionCard;
