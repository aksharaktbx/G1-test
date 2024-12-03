// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const SmallCard = ({ imgSrc, title, description, questionsCount, mistakesAllowed }) => {
    return (
     <Link to="/home/who-can-g1-driver-drive-with/">  <div className="bg-white rounded-lg flex flex-col justify-between shadow-md overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
            <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-5 text-sm">{description}</p>
                <div className="flex items-center justify-between text-gray-600">
          <div>
            <span className="text-xl font-semibold">{questionsCount}</span>
            <span className="text-sm"> questions</span>
          </div>
          <div className='flex flex-col'>
            <span className="text-xl font-semibold">{mistakesAllowed} mistakes</span>
            <span className="text-sm"> Allowed to pass</span>
          </div>
        </div>
            </div>
        </div></Link> 
    );
};

export default SmallCard;
