import React, { useState } from 'react';
import CarTest from './Tabs/CarTest';  // Adjust the import path as necessary
import MotorcycleTest from './Tabs/MotorcycleTest';  // Adjust the import path as necessary
import { FaRedo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Tabbar() {
  const [activeTab, setActiveTab] = useState('carTests');

  const tabContent = {
    carTests: {
      title: "Start your G1 Test Preparation",
      description: "Congratulations! You’re now one step closer to passing your official G1 test. To help you get all the practice you need, we have prepared free practice tests that mimic the real test. Our questions are very similar (sometimes identical) to those in the official G1 Test. Our mock tests use the same scoring system used by MTO, which means you’ll feel confident when you take the real test.",
      imgSrc: "https://etimg.etb2bimg.com/thumb/msid-84443929,width-1200,resizemode-4/.jpg",
      testTitle: "G1 Diagnostic Test",
      testProgress: "3/15",
      testStatus: "Not enough to pass"
    },
    motorcycleTests: {
      title: "Start your G1 Test Preparation",
      description: "Congratulations! You’re now one step closer to passing your official G1 test. To help you get all the practice you need, we have prepared free practice tests that mimic the real test. Our questions are very similar (sometimes identical) to those in the official G1 Test. Our mock tests use the same scoring system used by MTO, which means you’ll feel confident when you take the real test.",
      imgSrc: "https://www.godigit.com/content/dam/godigit/directportal/en/best-bikes-in-india.jpg",
      testTitle: "Motorcycle Diagnostic Test",
      testProgress: "5/15",
      testStatus: "Almost there!"
    },
    behindTheWheel: {
      title: "Start your G1 Test Preparation",
      description: "Practice Behind-the-Wheel and Defensive Driving with our live simulators.",
      imgSrc: "https://etimg.etb2bimg.com/thumb/msid-84443929,width-1200,resizemode-4/.jpg",
      testTitle: "Behind-the-Wheel Diagnostic Test",
      testProgress: "7/15",
      testStatus: "Good progress!"
    }
  };
  const buttonConfig = {
    carTests: {
      link: '/home/g1-free-test',
      text: 'Next test: G1 Practice Test 1',
    },
    motorcycleTests: {
      link: '/home/g1-free-test',
      text: 'Next test: Motorcycle Practice Test',
    },
    behindTheWheel: {  // Changed this key to match activeTab
      link: '/home/gi-premium-test-series',
      text: 'Next test: Behind-the-Wheel Practice Test', // Updated text for clarity
    },
  };
  

  const renderActiveTestComponent = () => {
    switch (activeTab) {
      case 'carTests':
        return <CarTest />;
      case 'motorcycleTests':
        return <MotorcycleTest />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-full transition ${activeTab === 'carTests' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-300'}`} 
            onClick={() => setActiveTab('carTests')}
          >
            Car Tests
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition ${activeTab === 'motorcycleTests' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-300'}`} 
            onClick={() => setActiveTab('motorcycleTests')}
          >
            Motorcycle Tests
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition ${activeTab === 'behindTheWheel' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-300'}`} 
            onClick={() => setActiveTab('behindTheWheel')}
          >
            Behind-the-wheel
          </button>
        </div>
        <div className="text-center mb-10 mt-4">
  <h1 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h1>
  <p className="text-gray-700 mb-4">{tabContent[activeTab].description}</p>
  
  <Link to={buttonConfig[activeTab]?.link}>
  <button className="px-6 py-3 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-700 transition">
    {buttonConfig[activeTab]?.text}
  </button>
</Link>

</div>


        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{tabContent[activeTab].testTitle}</h2>
        </div>

        <div className="bg-gray-100 rounded-lg mt-5 p-4 flex">
          <img 
            src={tabContent[activeTab].imgSrc} 
            alt="Driving preparation" 
            className="w-1/3 rounded-lg mr-4"
          />
          <div className="w-2/3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{tabContent[activeTab].testTitle}</h3>
              <button className="flex items-center px-3 py-1 bg-red-200 text-red-600 rounded-full hover:bg-red-300 transition">
                <FaRedo className="mr-1" /> 
              </button>
            </div>
            <p className="text-gray-700 mb-4">
              Just starting to prepare for the exam and not sure where to begin? Quickly identify gaps in your knowledge of driving in Ontario, Canada with this {tabContent[activeTab].testTitle}.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-red-600 text-lg font-bold">{tabContent[activeTab].testProgress}</p>
                <p className="text-gray-500">{tabContent[activeTab].testStatus}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Render the active test component here */}
        <div className="mt-6">
          {renderActiveTestComponent()}
        </div>
      </div>
    </div>
  );
}

export default Tabbar;
