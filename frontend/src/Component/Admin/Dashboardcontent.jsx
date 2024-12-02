import React from 'react';

const DashboardContent = () => {
  return (
    <div className="flex flex-wrap justify-between gap-6 p-6">
      <div className="bg-gray-100 rounded-lg shadow-lg w-full sm:w-1/3 lg:w-1/4 p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Box 1</h2>
        <p className="text-gray-600 mt-2">This is the content for the first box. You can display any information here.</p>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-lg w-full sm:w-1/3 lg:w-1/4 p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Box 2</h2>
        <p className="text-gray-600 mt-2">This is the content for the second box. You can display any information here.</p>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-lg w-full sm:w-1/3 lg:w-1/4 p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Box 3</h2>
        <p className="text-gray-600 mt-2">This is the content for the third box. You can display any information here.</p>
      </div>
    </div>
  );
};

export default DashboardContent;
