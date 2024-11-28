import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close state
  };

  const faqItems = [
    { question: "How fast will I see results?", answer: "You should see results within a few days, depending on your preparation." },
    { question: "Is G1 Premium a recurring subscription?", answer: "G1 Premium is a one-time purchase, but there are subscription options for additional services." },
    { question: "I've failed my exam. How can I be sure this will help me?", answer: "Our program includes a pass guarantee, so if you follow the plan, you should succeed." },
    { question: "Is the program available in languages other than English?", answer: "Yes, our program is available in multiple languages including French and Spanish." },
    { question: "Do you offer discounts to military/veterans or first responders?", answer: "Yes, we offer discounts to military, veterans, and first responders. Please contact us for more details." }
  ];

  return (
    <>

    <div className="flex flex-col items-center justify-center min-h-screen" id="root">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Your questions, answered
        </h1>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="flex-1">{item.question}</span>
                <i
                  className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-500`}
                ></i>
              </div>
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    
    </div>
      <div className="flex w-full bg-gray-200 px-4 justify-between">
      {/* Left side: Company logo */}
      <div className="flex items-center space-x-2 p-4">
        <img
          alt="Company logo"
          className="w-6 h-6"
          height="24"
          src="https://storage.googleapis.com/a1aa/image/b9kScyUbe7XMSSmfCkP6hKFMJWwnq3JvO6981eFnFBfRajLPB.jpg"
          width="24"
        />
        <span className="text-sm">g1.ca premium</span>
      </div>

      {/* Right side: Links */}
      <div className="flex space-x-4 text-sm text-gray-500 p-4">
        <Link to="/about">About us</Link>
        <Link to="/terms-privacy">Terms and Privacy</Link>
        <Link to="/help-center">Help Center</Link>
      </div>
    </div>
    </>
  );
};

export default FAQAccordion;
