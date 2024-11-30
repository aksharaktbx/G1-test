import React from 'react';

const Custompopup = ({ onClose, handleSubmit, children, title }) => {
  // Function to call the passed handleSubmit function and close the popup
  const handleButtonClick = () => {
    if (handleSubmit) {
      handleSubmit(); // Call the passed handleSubmit function
    }
    onClose(); // Close the popup after submitting
  };


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-10 flex justify-center items-start pt-16">
      {/* Apply the animate-slide-down class to trigger the animation */}
      <div className="bg-white rounded-lg shadow-lg w-2/3 max-w-2xl p-4 animate-slide-down">
        {/* Popup Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold">{title || 'Custom Popup'}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            ✕ {/* Close button */}
          </button>
        </div>

        {/* Popup Body */}
        <div className="py-6">
          <div>{children}</div> {/* Render any custom content passed as children */}
        </div>

        {/* Popup Footer with Action Button */}
        <div className="flex justify-end border-t pt-4">
          <button className="text-gray-500 hover:text-gray-700 mr-4" onClick={onClose}>
            Close
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Custompopup;
