import React from 'react';

const LargCard = ({ 
  imageSrc, 
  title, 
  description, 
  questionsCount, 
  mistakesAllowed 
}) => {
  return (
    <div className="bg-gray-100 rounded-lg  flex mt-4">
      <img 
        src={imageSrc} 
        alt={title} 
        className="rounded-l-lg w-1/2 p-4 rounded-md object-cover" 
      />
      <div className="p-6 w-1/2">
        <button className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mb-4">Try demo</button>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-gray-600">
          <div>
            <span className="text-xl font-semibold">{questionsCount}</span>
            <span className="text-sm"> questions</span>
          </div>
          <div>
            <span className="text-xl font-semibold">{mistakesAllowed}</span>
            <span className="text-sm"> Allowed to pass</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargCard;
