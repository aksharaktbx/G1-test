import React, { useState } from 'react';
import PremiumCards from './PremiumCards';
import VideoPlay from './VideoPlay';
import ShortVideo from './ShortVideo';
import ClientCards from './ClientCards';
import QuestionCard from './QuestionCard';
import Bottom from './Bottom';
import Accordian from './Accordian';

function Premium() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  const videoData = {
    videoSrc: 'https://videos.pexels.com/video-files/3006961/3006961-sd_640_360_24fps.mp4',
    subtitleSrc: 'https://path/to/your/subtitles_en.vtt',
    posterSrc: 'https://path/to/your/poster.jpg',
    buttonText: 'Online driving hazards simulators',
    headingText: 'Online driving hazards simulators',
    descriptionText: 'Watch the video and see the button light up when I start talking about subscribing to my YouTube channel. Subtitles need to be enabled for this effect to happen.'
  };
  const videoData2 = {
    videoSrc: 'https://videos.pexels.com/video-files/3006961/3006961-sd_640_360_24fps.mp4',
    subtitleSrc: 'https://path/to/your/subtitles_en.vtt',
    posterSrc: 'https://path/to/your/poster.jpg',
    buttonText: 'Online driving hazards simulators',
    headingText: 'Online driving hazards simulators',
    descriptionText: 'Watch the video and see the button light up when I start talking about subscribing to my YouTube channel. Subtitles need to be enabled for this effect to happen.'
  };


  return (
    <>

      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-semibold text-gray-900">Product</a>
              <a href="#" className="text-sm font-semibold text-gray-900">Features</a>
              <a href="#" className="text-sm font-semibold text-gray-900">Marketplace</a>
              <a href="#" className="text-sm font-semibold text-gray-900">Company</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>

          {isMobileMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-50 bg-black opacity-30" onClick={toggleMobileMenu} />
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Logo"
                    />
                  </a>
                  <button onClick={toggleMobileMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Product</a>
                      <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                      <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
                      <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Company</a>
                    </div>
                    <div className="py-6">
                      <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-10">
                Pass your <span className="text-indigo-600">G1 test</span> on the first try. <br />Guaranteed.
              </h1>
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s" alt="Driver 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s" alt="Driver 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s" alt="Driver 3" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp" alt="Driver 4" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pinimg.com/736x/55/b5/9c/55b59c73bd0ee0e42c0022168b9d36be.jpg" alt="Driver 5" />
                </div>
                <div className="ml-3 text-gray-700">
                  <div className="flex items-center">
                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                  </div>
                  <p className="text-sm">Join 12,900+ successful drivers</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                The only 3-in-1 program with real exam-like questions, interactive <i className="fas fa-car"></i> driving simulators, and AI-powered learning. Pass or your money back.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full mb-4">
                Get all exam-like questions
              </button>
              <div className="flex items-center justify-center lg:justify-start">
                <img className="w-12 h-12" src="https://i.pinimg.com/736x/36/b5/9f/36b59f9f74008d91d61817ca936f2fc0.jpg" alt="Pass Guarantee" />
                <div className="ml-3 text-left">
                  <p className="text-gray-700 font-bold">PASS Guarantee</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center text-green-500">

                  </div>

                </div>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>95% verified pass rate</li>
                  <li>Exclusive access to G1 Genie AI</li>
                  <li>All 300+ exam-like questions</li>
                </ul>
              </div>
            </div>
            {/* Right-side image */}
            <div className="lg:w-1/2 mt-6 lg:mt-0 lg:flex lg:justify-end">
              <img
                className="max-w-full h-auto"
                src="https://www.g1.ca/premium/g1-hero-mockup.png" // Replace with your image source
                alt="G1 Test"
              />
            </div>
          </div>
        </div>
        <PremiumCards />
      </div>
      <div className='mt-10'>  <VideoPlay

        videoSrc={videoData2.videoSrc}
        subtitleSrc={videoData2.subtitleSrc}
        posterSrc={videoData2.posterSrc}
        buttonText={videoData2.buttonText}
        headingText={videoData2.headingText}
        descriptionText={videoData2.descriptionText}
      /></div>
      <ClientCards />
      <QuestionCard />

      <div className='mt-10'>  <VideoPlay

        videoSrc={videoData.videoSrc}
        subtitleSrc={videoData.subtitleSrc}
        posterSrc={videoData.posterSrc}
        buttonText={videoData.buttonText}
        headingText={videoData.headingText}
        descriptionText={videoData.descriptionText}
      />
<div className="flex justify-center items-center ">
  <button className="border border-indigo-600 rounded-full p-3 hover:bg-indigo-600 hover:text-white">
    Get Started Now
  </button>
</div>
      </div>
      <Bottom/>
      <Accordian/>


    </>
  );
}

export default Premium;
