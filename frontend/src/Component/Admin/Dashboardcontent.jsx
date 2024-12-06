import React from 'react';

const DashboardContent = () => {
  return (
    <>  <h1 className=' text-3xl font-semibold text-gray-800 mb-3'>Analytics</h1>
    <div className="flex  gap-6">
    
      {/* Left column with three boxes stacked vertically */}
      <div className="flex flex-col gap-6 w-1/3   ">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Box 1</h2>
          <p className="text-gray-600 mt-2">This is the content for the first box. You can display any information here.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Box 2</h2>
          <p className="text-gray-600 mt-2">This is the content for the second box. You can display any information here.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Box 3</h2>
          <p className="text-gray-600 mt-2">This is the content for the third box. You can display any information here.</p>
        </div>
      </div>

      {/* Right column with a similar height */}
      <div className="flex flex-col bg-white rounded-lg shadow-lg w-2/3 ">
        <div className="bg-gray-100 rounded-lg shadow-lg flex-grow p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Main Content Box</h2>
          <p className="text-gray-600 mt-2">This box takes the remaining space on the right side. Add any content here.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardContent;
