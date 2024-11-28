import React from 'react';
import Navhead from '../Navhead';
import Footer from '../Footer';

function Testpage() {
  return (
    <>     
      <Navhead />
      <div className="flex items-center p-4">
        <main className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mx-auto mt-10 w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Defensive Driving Hazard Simulator 1</h1>
          <p className="text-center text-gray-500 mb-6">Watch a video → Identify hazards → Click on them</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <div className="flex items-center space-x-2 p-3">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Hazards</span>
              <span className="font-semibold">21</span>
            </div>
            <div className="flex items-center space-x-2 p-3">
              <i className="fas fa-hourglass-half"></i>
              <span>Length</span>
              <span className="font-semibold">2:02 min</span>
            </div>
            <div className="flex items-center space-x-2 p-3">
              <i className="fas fa-tachometer-alt"></i>
              <span>Level</span>
              <span className="font-semibold">Hard</span>
            </div>
            <div className="flex items-center space-x-2 p-3">
              <i className="fas fa-map-marker-alt"></i>
              <span>Toronto, Canada</span>
            </div>
          </div>
          <h3 className="text-center font-semibold mb-4">The hazards you'll need to identify:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">4</span>
                <p className="text-gray-500">Vehicles</p>
              </div>
              <i className="fas fa-car text-2xl"></i>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">10</span>
                <p className="text-gray-500">Signs/traffic lights</p>
              </div>
              <i className="fas fa-sign text-2xl"></i>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">6</span>
                <p className="text-gray-500">Pedestrians</p>
              </div>
              <i className="fas fa-walking text-2xl"></i>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">1</span>
                <p className="text-gray-500">Road markup</p>
              </div>
              <i className="fas fa-road text-2xl"></i>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 w-full sm:w-60 hover:text-white px-6 py-2 rounded-lg">Start</button>
          </div>
          <p className="text-center text-indigo-600">Learn more about identifying developing hazards</p>
        </main>
      </div>
      <div className="flex justify-center max-w-6xl mx-auto w-full mb-10  mt-10">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-6xl">
                        <div className="grid grid-cols-3 gap-4 text-gray-700">
                            <div>
                                <p className="font-bold">G1 Diagnostic Test</p>
                                <p className="text-blue-400">Easy</p>
                                <p>G1 Practice Test 1</p>
                                <p>G1 Practice Test 2</p>
                                <p>G1 Practice Test 3</p>
                                <p>G1 Practice Test 4</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Hard</p>
                                <p>G1 Practice Test 5</p>
                                <p>G1 Road Rules Test</p>
                                <p>200-Question G1 Test</p>
                                <p className="text-blue-400">Hardest</p>
                                <p>G1 Limits, Fines & Demerit Points Practice Test</p>
                                <p>Road Rule Marathon</p>
                                <p>Road Sign Marathon</p>
                                <p>G1 Massive Marathon</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Simulator</p>
                                <p>G1 Test Simulator</p>
                                <p className="text-gray-400">Behind-the-wheel</p>
                                <p>Virtual 360° Situations</p>
                                <p>Behind-the-Wheel Simulator</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>      <Footer/></div>
          
    </>
  );
}

export default Testpage;
