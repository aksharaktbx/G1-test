import React from 'react';

const LargCard = ({ 
  imageSrc, 
  title, 
  description, 
  questionsCount, 
  mistakesAllowed 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md  flex ">
      <img 
  src={imageSrc} 
  alt={title} 
  className="rounded-l-lg w-1/2 object-cover" 
/>

      <div className="p-6 w-1/2">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-gray-600">
          <div className='flex flex-col'>
            <span className="text-xl font-semibold">{questionsCount}</span>
            <span className="text-sm"> questions</span>
          </div>
          <div className='flex flex-col'>
            <span className="text-xl ">{mistakesAllowed} </span>
            <span className="text-sm"> Allowed to pass</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargCard;
