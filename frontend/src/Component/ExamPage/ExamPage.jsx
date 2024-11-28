import React from 'react';
import Navhead from '../Navhead';
import Footer from '../Footer';

function ExamPage() {
  return (
    <>
      <Navhead />
      <div className="max-w-6xl mt-10 mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <button className="text-gray-500 mb-2 md:mb-0">
            <i className="fas fa-arrow-left"></i> All Tests
          </button>
          <button className="text-gray-500">
            <i className="fas fa-redo"></i> Restart
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="bg-gray-200 p-4 rounded-lg mb-4">
              <h2 className="text-lg font-semibold mb-2">Your Progress</h2>
              <div className="grid grid-cols-5 gap-2 text-center">
                {Array.from({ length: 40 }, (_, i) => (
                  <div key={i} className="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer bg-white">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600"><span className="text-green-500">0</span> Correct</p>
                <p className="text-sm text-gray-600"><span className="text-red-500">0</span> Incorrect</p>
                <p className="text-sm text-gray-600">8 mistakes allowed to pass</p>
                <p className="text-sm text-gray-600">Pass mark: 80%</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <p className="text-lg font-semibold">Challenge Bank™</p>
              <p className="text-2xl font-bold">27</p>
            </div>
          </div>
          <div className="w-full md:w-3/4 pl-0 md:pl-6 mx-0 md:mx-20">
          <img
  src="https://static.vecteezy.com/system/resources/previews/042/195/238/non_2x/ai-generated-racing-game-background-free-photo.jpg"
  alt="Detour sign on a road"
  className="rounded-lg h-74 w-full mb-4"
/>
            <h2 className="text-2xl font-semibold mb-4">What does this sign mean?</h2>
            <div className="space-y-2"> 
              <label className="flex items-center hover:bg-indigo-100 p-3 rounded-lg">
                <input type="radio" name="answer" className="mr-2" />
                <span className=''>There is construction work one kilometre ahead.</span>
              </label>
              <label className="flex items-center hover:bg-indigo-100 p-3 rounded-lg">
                <input type="radio" name="answer" className="mr-2" />
                <span>Follow these signs until you return to your regular route.</span>
              </label> 
              <label className="flex items-center hover:bg-indigo-100 p-3 rounded-lg">
                <input type="radio" name="answer" className="mr-2" />
                <span>This lane is closed ahead; merge into another lane.</span>
              </label>
              <label className="flex items-center hover:bg-indigo-100 p-3 rounded-lg">
                <input type="radio" name="answer" className="mr-2 " />
                <span>Keep a certain distance away.</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>  <Footer/></div>
    
    </>
  );
}

export default ExamPage;
