import React from 'react';
import Navhead from '../Navhead';

const Bannerads = () => {
  return (
    <>
      <Navhead />
    
<div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white rounded-lg shadow-lg p-12 w-4/5 md:w-3/5 lg:w-2/5 relative">
        <div class="absolute top-0 right-0 mt-4 mr-4">
            <i class="fas fa-times text-gray-400 cursor-pointer text-2xl"></i>
        </div>
        <div class="absolute top-0 right-0 w-1/2 h-32 bg-yellow-400 rounded-tr-lg rounded-bl-full"></div>
        <div class="relative z-10">
            <h1 class="text-3xl font-bold text-gray-800 mt-12">Pass the First Time. Guaranteed.</h1>
            <p class="text-gray-500 mt-4 text-lg">Be fully prepared in days, not weeks. Perfect for first-timers, renewal applicants and senior citizens.</p>
            <ul class="mt-8 space-y-6">
                <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 text-xl"></i>
                    <div class="ml-4">
                        <h2 class="font-bold text-gray-800 text-lg">300+ Exam-Like Questions</h2>
                        <p class="text-gray-500 text-base">Unlock toughest and trickiest must-know questions written by curriculum experts and seen on the official exam.</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 text-xl"></i>
                    <div class="ml-4">
                        <h2 class="font-bold text-gray-800 text-lg">Pass Guarantee</h2>
                        <p class="text-gray-500 text-base">Pass using our fast and efficient method, or your Premium membership is free.</p>
                    </div>
                </li>
                <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 text-xl"></i>
                    <div class="ml-4">
                        <h2 class="font-bold text-gray-800 text-lg">G1 Exam Simulator</h2>
                        <p class="text-gray-500 text-base">Just like the real thing. Simulate the experience of a real exam by answering random questions from a vast database.</p>
                    </div>
                </li>
            </ul>
            <div class="flex items-center mt-8">
                <img src="https://placehold.co/50x50" alt="Pass Guarantee badge" class="w-12 h-12"/>
                <p class="text-gray-500 ml-4 text-base">Nearly all Premium users pass the official G1 test their first time. If you don't, we'll refund 100% of your money.</p>
            </div>
            <button class="mt-8 bg-blue-600 text-white font-bold py-4 px-8 rounded-full w-full hover:bg-blue-700 text-lg">Unlock 300+ Exam-Like Questions</button>
        </div>
    </div>
</div>

    </>
  );
};

export default Bannerads;
