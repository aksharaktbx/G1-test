import React from 'react';
import Navhead from '../Navhead';

const Result = () => {
  return (
    <>
    <Navhead/>
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white p-6 mt-5 rounded-lg  flex">
        {/* Left Section */}
        <div className="w-1/2 pr-6">
          <h2 className="text-xl font-bold mb-4">How to Pass The First Time</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Practice with the free tests</li>
            <li>Unlock the Premium tests</li>
            <li>Review our Premium Cheat Sheets</li>
          </ul>
          <div className="relative">
            <img
              alt="G1 Exam Questions book cover"
              className="w-full mb-4"
              height="300"
              src="https://storage.googleapis.com/a1aa/image/lIIZ4qV5Fs4vKZtg6xshZwNMgBE8SKJ4IdkBDYH3uEUhUc9E.jpg"
              width="200"
            />
            <img
              alt="Ontario Road Signs book cover"
              className="absolute bottom-0 right-0 w-1/2 border-2 border-white shadow-lg"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/TS54mX5Vx56ECRlM6vfm0V7jSLcsmCTBKxALa5hkyJgBp46JA.jpg"
              width="150"
            />
          </div>
          <div className="flex justify-center mt-5">
  <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full">
    Pass The First Time With Premium
  </button>
</div>

          <p className="text-center text-sm mt-2">
            100% Money Back{' '}
            <span className="text-blue-600 underline">Pass Guarantee</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 pl-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
            <span className="text-2xl font-bold">23%</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-4">
            Not enough to pass :-(
          </p>

          {/* Road Signs */}
          <div className="mb-4">
            <p className="font-bold">Road Signs</p>
            <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div className="absolute top-0 left-0 h-full bg-green-400" style={{ width: '20%' }}></div>
            </div>
            <p className="text-sm text-gray-600">20% Your score</p>
            <p className="text-sm text-gray-600">80% Needed to pass</p>
          </div>

          {/* Road Rules */}
          <div className="mb-4">
            <p className="font-bold">Road Rules</p>
            <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div className="absolute top-0 left-0 h-full bg-green-400" style={{ width: '25%' }}></div>
            </div>
            <p className="text-sm text-gray-600">25% Your score</p>
            <p className="text-sm text-gray-600">80% Needed to pass</p>
          </div>

          {/* Motivational Message */}
          <div className="flex items-center mb-4">
            <img
              alt="Cartoon police officer"
              className="w-12 h-12 mr-4"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/JOx6yfDa1QzNGy8SwP3VNtbvS0neniKMMzVfT2ao9CFIkirnA.jpg"
              width="50"
            />
            <p className="text-gray-600">
              Well, you can’t win them all the time. I mean, you also can’t slap a tiger in the face and expect to walk away.
              Baby steps, you know?
            </p>
          </div>

      {/* Next Test Button */}
<button className="bg-indigo-600 text-white justify-center font-bold py-2 px-4 rounded-full">
  Next Up: G1 Practice Test 2
</button>

        </div>
      </div>

      {/* Go Back Link */}
      <p className="text-center text-blue-600 underline mt-4">
        Go back to all tests
      </p>
    </div>
    </>
  );
};

export default Result;
