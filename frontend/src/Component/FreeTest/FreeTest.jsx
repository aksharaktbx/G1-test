import React from 'react';
import { Link } from 'react-router-dom';
import Navhead from '../Navhead';
import Footer from '../Footer';

function FreeTest() {
  return (
    <>
      <Navhead />
      <div className="flex justify-center py-8 px-4">
        <div className="bg-white rounded-lg p-10 flex flex-col md:flex-row max-w-6xl w-full">
          <div className="mr-0 md:mr-8 mb-8 md:mb-0 flex-1">
            <h1 className="text-3xl font-bold mb-4">Free Ontario G1 Practice Test 2024</h1>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Perfect for first-timers or newcomers to Ontario</li>
              <li>Based on the official MTO Driver's Handbook</li>
              <li>Triple-checked for accuracy</li>
              <li>Updated for December 2024</li>
            </ul>
            <Link to="/home/text-series">    <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full flex items-center">
          <i className="fas fa-car mr-2"></i>
              Start free practice test
            </button>   </Link>
          </div>
          <div className="relative flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8lDw2Hnzo8FGCD9qbwktvteqsRPH1baSng&s"
              alt="A black pickup truck parked on the side of the road"
              className="rounded-lg w-full h-auto"
            />
            <div className="mt-4 flex items-center">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star-half-alt text-yellow-500"></i>
              <span className="ml-2 text-gray-600">TrustScore 4.7</span>
              <span className="ml-1 text-gray-600">758 reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                alt="Profile picture of Steven Litvinchouk"
                className="rounded-full object-cover w-12 h-12 mr-4"
              />
              <div>
                <p className="text-indigo-600">Steven Litvinchouk</p>
                <p className="text-sm text-gray-600">M.S., Chief Educational Researcher, Member of ACES.</p>
              </div>
            </div>
            <p className="font-bold text-lg mb-2">Our most popular free G1 practice test when you're getting a licence in Ontario.</p>
            <p className="text-gray-700 mb-2">
              Once you are 16, you may visit a Drive Test location and test for the Ontario G1 licence with a written knowledge test of 40 multiple-choice questions. The G1 test is divided into two parts: 20 questions on road signs, and 20 questions on rules of the road. You must correctly answer <span className="font-bold">16 questions in each section</span> to pass the test. In addition to the written exam, you will also need to pass a <span className="font-bold">vision test</span> and pay a <span className="font-bold">$158.25 package fee</span>, which will cover your knowledge test, eventual G2 driver's test, and your five-year license. If you need to retake the written exam, it will be an additional $15.75.
            </p>
            <p className="text-gray-700 mb-2">
              The Ontario G1 driver's test is based on the 2024 Ontario Driver's Handbook and questions from the test will be pulled directly from the guide. Ontario has set in place a graduated driver’s license (GDL) program that takes about two years to complete. After you pass your written test at Drive Test, you must hold your G1 license for one year (or 8 months if you are enrolled in a driver training program) before you may take your first drive test to qualify for a G2 license. The G1 license will allow you to practice your driving skills under the supervision of a fully licensed driver.
            </p>
            <p className="text-gray-700 mb-2">
              Our G1 practice tests use the same scoring system as the Drive Test centres across the province, so there will be no surprises when you go there. The G1.ca users have reported that these questions are almost identical to the real ones.
            </p>
            <p className="text-gray-700">Join thousands who've aced their G1 test using our practice sets.</p>
          </div>

          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg">
            <p className="font-bold mb-2">What to expect on the official exam</p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-1/2 text-center bg-blue-100 p-2 rounded-lg">
                  <p className="text-xl font-bold">40</p>
                  <p className="text-sm text-gray-600">questions</p>
                </div>
                <div className="w-1/2 text-center bg-blue-100 p-2 rounded-lg ml-2">
                  <p className="text-xl font-bold">32</p>
                  <p className="text-sm text-gray-600">correct answers to pass</p>
                </div>
              </div>
              <div className="text-center bg-blue-100 p-2 rounded-lg">
                <p className="text-xl font-bold">80%</p>
                <p className="text-sm text-gray-600">passing score</p>
              </div>
            </div>
            <p className="font-bold mb-2">Helpful links</p>
            <ul className="list-disc list-inside text-black">
              <li><Link to="#" className="hover:underline">Ontario driver's handbook</Link></li>
              <li><Link to="#" className="hover:underline">How to get your G1 licence</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="p-6 rounded-lg bg-indigo-100 mb-8">
          <h2 className="text-lg font-semibold mb-4">More Resources</h2>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold">Easy</p>
              <ul>
                <li><Link to="#" className="text-black">G1 Diagnostic Test</Link></li>
                <li><Link to="#" className="text-black font-semibold">G1 Practice Test 1</Link></li>
                <li><Link to="#" className="text-black">G1 Practice Test 2</Link></li>
                <li><Link to="#" className="text-black">G1 Practice Test 3</Link></li>
                <li><Link to="#" className="text-black">G1 Practice Test 4</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Hard</p>
              <ul>
                <li><Link to="#" className="text-black">G1 Practice Test 5</Link></li>
                <li><Link to="#" className="text-black">G1 Road Rules Test</Link></li>
                <li><Link to="#" className="text-black">200-Question G1 Test</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Hardest</p>
              <ul>
                <li><Link to="#" className="text-black">G1 Limits, Fines & Demerit Points Practice Test</Link></li>
                <li><Link to="#" className="text-black">Road Rule Marathon</Link></li>
                <li><Link to="#" className="text-black">Road Sign Marathon</Link></li>
                <li><Link to="#" className="text-black">G1 Massive Marathon</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Simulator</p>
              <ul>
                <li><Link to="#" className="text-black">G1 Test Simulator</Link></li>
                <li><Link to="#" className="text-gray-500">Behind-the-wheel</Link></li>
                <li><Link to="#" className="text-black">Virtual 360° Situations</Link></li>
                <li><Link to="#" className="text-black">Behind-the-Wheel Simulator</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-lg bg-indigo-100 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Are you in another province?</h2>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <ul>
              <li><Link to="#" className="text-black">Alberta</Link></li>
              <li><Link to="#" className="text-black">British Columbia</Link></li>
              <li><Link to="#" className="text-black">Manitoba</Link></li>
              <li><Link to="#" className="text-black">New Brunswick</Link></li>
            </ul>
            <ul>
              <li><Link to="#" className="text-black">Newfoundland and Labrador</Link></li>
              <li><Link to="#" className="text-black">Northwest Territories</Link></li>
              <li><Link to="#" className="text-black">Nova Scotia</Link></li>
              <li><Link to="#" className="text-black">Nunavut</Link></li>
            </ul>
            <ul>
              <li><Link to="#" className="text-black">Prince Edward Island</Link></li>
              <li><Link to="#" className="text-black">Quebec</Link></li>
              <li><Link to="#" className="text-black">Saskatchewan</Link></li>
              <li><Link to="#" className="text-black">Yukon</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-10 mb-10 bg-white rounded-lg shadow-md  mt-10">
                <h1 className="text-xl font-semibold mb-4">List of questions (classic view)</h1>
                <ol className="list-decimal list-inside space-y-2">
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this construction sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>This symbol indicates</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>What does this road sign mean?</li>
                    <li>While driving, you receive a call on your hand-held cell phone. There are no passengers who can take the call for you. What should you do?</li>
                    <li>When you are in a roundabout,</li>
                </ol>
                <div className="flex justify-center mt-10">
  <button className='border rounded-full border-indigo-600 w-40 p-2 flex justify-center items-center hover:bg-indigo-600 hover:text-white transition'>
    Print
  </button>
</div>

            </div>
            <Footer/>
    </>
  );
}

export default FreeTest;
