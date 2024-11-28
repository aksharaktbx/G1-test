import React from 'react';
import Navhead from '../Navhead';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
function Premiumtest() {
  return (
    <>
      <Navhead />
      <div className="max-w-6xl mx-auto p-6 md:p-8 bg-white rounded-lg mt-10">
        <div className="flex flex-col md:flex-row justify-start items-start">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">
              Animated <span className="text-indigo-600">Behind-the-Wheel</span> Simulator
            </h1>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Perfect for first-timers or newcomers to Ontario</li>
              <li>Based on the official MTO Driver's Handbook</li>
              <li>Triple-checked for accuracy</li>
              <li>Updated for December 2024</li>
            </ul>
            <div className="my-5">
              <button className="mt-5 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
                <i className="fas fa-gem mr-2"></i> Unlock full access with Premium
              </button>
            </div>
           
          </div>
          <div className="relative md:w-1/3 mt-4 p-4 md:mt-0">
            <img src="https://www.naturalmotion.com/wp-content/uploads/game-csr2-hero-1-1.jpg" alt="Animated driving scene" className="rounded-lg shadow-md w-full h-auto" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVf0CKDmawwO93K4IxhmjkMJdb8M87e6RJ4Q&s" alt="Sample driver's license" className="absolute h-20 w-20 bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rounded-lg shadow-md" />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold">This test is a Premium member exclusive. You'll get:</p>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0 md:space-x-6">
            {[
              { src: "https://img.icons8.com/?size=40&id=45990&format=png", text: "All 300+ exam-like questions specific to Ontario" },
              { src: "https://img.icons8.com/?size=48&id=fTkqveCX0blI&format=png", text: "Interactive learning with AI personal tutor" },
              { src: "https://img.icons8.com/?size=48&id=b_-si9eV3alM&format=png", text: "Unique 360° Virtual Road Simulations" },
              { src: "https://img.icons8.com/?size=48&id=p9jKUHLk5ejE&format=png", text: "Get your money back if you don't pass" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img src={item.src} alt={`Icon for ${item.text}`} className="w-10 h-10" />
                <span className="text-md">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-between items-center mt-6">
          <div className="flex items-center space-x-2">
            <i className="fab fa-trustpilot text-green-500 text-2xl"></i>
            <div>
              <p className="text-green-500 font-semibold">TrustScore 4.7</p>
              <p className="text-gray-500 text-sm">758 reviews</p>
            </div>
          </div>
          
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="text-blue-500 font-semibold">Explore free tests</Link>
        </div>

        <div className="max-w-6xl mx-auto w-full bg-white p-8 my-32 bg-white shadow-sm rounded-lg">
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

      <div className="p-6 rounded-lg bg-white shadow-md mb-8">
  <h2 className="text-lg font-semibold mb-4">More Resources</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
    <div>
      <p className="font-semibold">Easy</p>
      <ul>
        <li className="py-1"><Link to="#" className="text-black">G1 Diagnostic Test</Link></li>
        <li className="py-1"><Link to="#" className="text-black font-semibold">G1 Practice Test 1</Link></li>
        <li className="py-1"><Link to="#" className="text-black">G1 Practice Test 2</Link></li>
        <li className="py-1"><Link to="#" className="text-black">G1 Practice Test 3</Link></li>
        <li className="py-1"><Link to="#" className="text-black">G1 Practice Test 4</Link></li>
      </ul>
    </div>
    <div>
      <p className="font-semibold">Hard</p>
      <ul>
        <li className="py-1"><Link to="#" className="text-black">G1 Practice Test 5</Link></li>
        <li className="py-1"><Link to="#" className="text-black">G1 Road Rules Test</Link></li>
        <li className="py-1"><Link to="#" className="text-black">200-Question G1 Test</Link></li>
      </ul>
    </div>
    <div>
      <p className="font-semibold">Hardest</p>
      <ul>
        <li className="py-1"><Link to="#" className="text-black">G1 Limits, Fines & Demerit Points Practice Test</Link></li>
        <li className="py-1"><Link to="#" className="text-black">Road Rule Marathon</Link></li>
        <li className="py-1"><Link to="#" className="text-black">Road Sign Marathon</Link></li>
        <li className="py-1"><Link to="#" className="text-black">G1 Massive Marathon</Link></li>
      </ul>
    </div>
    <div>
      <p className="font-semibold">Simulator</p>
      <ul>
        <li className="py-1"><Link to="#" className="text-black">G1 Test Simulator</Link></li>
        <li className="py-1"><Link to="#" className="text-gray-500">Behind-the-wheel</Link></li>
        <li className="py-1"><Link to="#" className="text-black">Virtual 360° Situations</Link></li>
        <li className="py-1"><Link to="#" className="text-black">Behind-the-Wheel Simulator</Link></li>
      </ul>
    </div>
  </div>
</div>
<div className="p-6 rounded-lg bg-white shadow-md mb-10">
  <h2 className="text-lg font-semibold mb-4">Are you in another province?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
    <ul>
      <li className="py-1"><Link to="#" className="text-black">Alberta</Link></li>
      <li className="py-1"><Link to="#" className="text-black">British Columbia</Link></li>
      <li className="py-1"><Link to="#" className="text-black">Manitoba</Link></li>
      <li className="py-1"><Link to="#" className="text-black">New Brunswick</Link></li>
    </ul>
    <ul>
      <li className="py-1"><Link to="#" className="text-black">Newfoundland and Labrador</Link></li>
      <li className="py-1"><Link to="#" className="text-black">Northwest Territories</Link></li>
      <li className="py-1"><Link to="#" className="text-black">Nova Scotia</Link></li>
      <li className="py-1"><Link to="#" className="text-black">Nunavut</Link></li>
    </ul>
    <ul>
      <li className="py-1"><Link to="#" className="text-black">Prince Edward Island</Link></li>
      <li className="py-1"><Link to="#" className="text-black">Quebec</Link></li>
      <li className="py-1"><Link to="#" className="text-black">Saskatchewan</Link></li>
      <li className="py-1"><Link to="#" className="text-black">Yukon</Link></li>
    </ul>
  </div>
</div>


      </div>
      <Footer/>
    </>
  );
}

export default Premiumtest;
