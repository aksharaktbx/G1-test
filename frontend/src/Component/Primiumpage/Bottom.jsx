import React from 'react';
import { Link } from 'react-router-dom';

// PricingCard Component
const PricingCard = ({ title, description, price, period, dailyCost, buttonText, features, highlight }) => (
<div className={`bg-white p-6 rounded-lg shadow-md ${highlight ? 'border-2 border-blue-500' : ''} relative`}>
  {highlight && (
    <div className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded absolute -mt-8">
      {highlight}
    </div>
  )}
  <h2 className="text-2xl font-bold mb-2 sm:text-3xl md:text-4xl">{title}</h2>
  <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">{description}</p>
  <div className="text-4xl font-bold mb-2 sm:text-5xl md:text-6xl">
    ${price} <span className="text-lg font-normal">/{period}</span>
  </div>
  <div className="text-gray-500 mb-4 text-sm sm:text-base md:text-lg">Just ${dailyCost}/day</div>
  <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-indigo-700 sm:px-6 sm:py-3 md:px-8 md:py-4">
    {buttonText}
  </button>
  <ul className="text-gray-700  space-y-2">
    {features.map((feature, index) => (
      <li key={index} className="flex  items-center mb-2 text-sm sm:text-base md:text-sm">
        <i className="fas fa-check text-blue-500 mr-2"></i>
        {feature}
      </li>
    ))}
  </ul>
</div>


);

// Bottom Component
function Bottom() {
  return (
    <>
      <div className="my-20">
        <div className="my-10">
          {/* Title */}
          <h1 className="text-center text-3xl sm:text-4xl font-semibold">
            Accelerate your exam readiness with{' '}
            <span className="text-indigo-600">essential 📑 cheat sheets</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-center mx-auto text-lg sm:text-xl w-full sm:w-[600px]">
            These quick, printable PDFs cover the trickiest questions you’re likely to see on the official exam.
            Study on the go, at work or in front of the TV.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 p-10 rounded">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIN1gwlCld-PW_qX5QxwNMdPUff8gYhTOe8w&s"
            alt="Image 1"
            className="h-[300px] sm:h-[400px] rounded w-full sm:w-[300px] object-cover"
          />
          <img
            src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/white_cotton_solid_shirts_for_men_base_02_05_2024_700x933.jpg"
            alt="Image 2"
            className="h-[300px] sm:h-[400px] rounded w-full sm:w-[300px] object-cover"
          />
          <img
            src="https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/white_cotton_solid_shirts_for_men_base_02_05_2024_700x933.jpg"
            alt="Image 3"
            className="h-[300px] sm:h-[400px] rounded w-full sm:w-[300px] object-cover"
          />
        </div>
      </div>

      <div className="p-20 rounded">
        <div className="relative rounded-lg mx-auto w-8/10 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="Background"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          />

          {/* Background Gradient */}
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[40rem] sm:w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            ></div>
          </div>

          {/* Content Section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl sm:text-3xl font-semibold tracking-tight text-white sm:text-7xl">
                Established in 2010. Here to stay.
              </h2>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl">
                G1 Premium is built by Elegant E-Learning, the largest online independent driver education provider in Canada. We partner with government agencies, over 2,500 libraries and organizations like NOYS, National Safety Council, and Roadway Safety Foundation. We’re here for the long haul, so your trust is secure with us.
              </p>
              <button className='text-white mt-4'>Read More...</button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="flex flex-col items-center justify-center py-32 text-center p-4 bg-gradient-to-r from-white to-indigo-200">
        <div className="bg-white rounded-full px-4 py-2 mb-4">
          <span className="text-gray-600">Perfect for first-timers and newcomers to Ontario</span>
        </div>
        <h1 className="text-4xl font-bold mb-2 mt-4">
          Everything you need to <span className="text-blue-500">pass</span> with confidence
        </h1>
        <p className="text-gray-700 mb-6 mt-3">
          Transparent pricing, no hidden fees. You’ll walk out of the DriveTest centre, feeling like you just took a first-grade spelling test. One-time purchase, not a subscription.
        </p>
        <div className="flex flex-col items-center mt-8">
          <div className="flex items-center mb-2">
            <img
              src="https://driving-tests.org/cdl-premium/passguarantee-orig.svg"
              alt="PASS Guarantee badge"
              className="mr-2 h-20 w-25"
            />
          </div>
          <div className="flex">
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 p-10 mt-16">
  <div className="flex-1 min-w-[250px] max-w-sm mx-auto">
    <PricingCard
      title="7-Day G1 Prep"
      description="Flexible weekly subscription for focused prep. Renews automatically, cancel anytime."
      price="49"
      period="weekly"
      dailyCost="7"
      buttonText="Start my risk-free prep now"
      features={[
        "Pass Guarantee (100% money back)",
        "All 300 exam-like questions for Ontario",
        "Unlimited exam simulators (theory & BTW)",
        "360° Virtual Road Simulations",
        "G1 Genie AI & Challenge Bank™",
        "3 Cheat Sheets (most common questions)",
        "Personalized study plan"
      ]}
    />
  </div>
  
  <div className="flex-1 min-w-[250px] max-w-sm mx-auto">
    <PricingCard
      title="30-Day G1 Prep"
      description="Most flexible option: auto-renews at $75/mo for continued prep. Cancel anytime."
      price="75"
      period="monthly"
      dailyCost="2.5"
      buttonText="Start my risk-free prep now"
      features={[
        "Pass Guarantee (100% money back)",
        "All 300 exam-like questions for Ontario",
        "Unlimited exam simulators (theory & BTW)",
        "360° Virtual Road Simulations",
        "G1 Genie AI & Challenge Bank™",
        "3 Cheat Sheets (most common questions)",
        "Personalized study plan"
      ]}
      highlight="Best value: save $121"
    />
  </div>

  <div className="flex-1 min-w-[250px] max-w-sm mx-auto">
    <PricingCard
      title="Lifetime Unlimited"
      description="Best for lifelong access and family use, providing unlimited access to all resources."
      price="159"
      period="one-time"
      dailyCost="1.7"
      buttonText="Start my risk-free prep now"
      features={[
        "Pass Guarantee (100% money back)",
        "All 300 exam-like questions for Ontario",
        "Unlimited exam simulators (theory & BTW)",
        "360° Virtual Road Simulations",
        "G1 Genie AI & Challenge Bank™",
        "3 Cheat Sheets (most common questions)",
        "Personalized study plan",
        "Family Sharing (3 people, with Family plan)"
      ]}
      highlight="Lifetime peace of mind"
    />
  </div>
</div>


            <div className="flex flex-col items-center justify-center   text-gray-700">
                    <div className="text-center mb-8">
                        <i className="fas fa-lock text-green-500 text-2xl"></i>
                        <h2 className="text-lg font-semibold mt-2">Secure checkout</h2>
                        <p className="text-sm text-gray-500">
                            Protected by 256-bit TLS encryption – the same level of security used by leading banks and financial institutions.
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-semibold mb-4">Have a question or want to chat about plan selection?</p>
                        <div className="flex space-x-4">
                            <button className="flex items-center bg-white px-4 py-2 border hover:text-white   rounded-md text-indigo-600 hover:bg-indigo-600">
                                <i className="fas fa-comments mr-2"></i> Chat with us
                            </button>
                            <button className="flex items-center px-4  bg-white py-2 border hover:text-white   rounded-md text-indigo-600 hover:bg-indigo-600">
                                <i className="fas fa-envelope mr-2"></i> Email
                            </button>
                            <button className="flex items-center px-4  bg-white py-2 border hover:text-white  rounded-md text-indigo-600 hover:bg-indigo-600">
                                <i className="fas fa-phone mr-2"></i> Call 1-888-592-5585
                            </button>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
}

export default Bottom;
