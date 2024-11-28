import React from 'react';

const CustomCards = ({ icon, title, description }) => {
    return (
        <div className="max-w-xs mx-auto ">
            <div className="p-4 flex justify-center mb-4 mt-5">
                <div className="text-indigo-600 text-4xl">{icon}</div>
            </div>
            <h3 className="text-xl  mt-5">{title}</h3>
            <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
    );
};

export default CustomCards;
