import React, { useState } from 'react';
import '../index.css';
import image1 from '../Image/background poster p.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <>
      <div className="bg-indigo-600">
        <header className="bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="../Image/Capture.PNG" alt="" />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center p-2 gap-x-1 text-sm/6 font-semibold text-gray-900"
                >
                  Help
                  <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                  <div className="p-4">
                    {[
                      { name: 'Help', link: '/home/Help' },
                      { name: 'FAQ', link: '/home/FQ&A' }
                    ].map(item => (
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" key={item.name}>
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                          </svg>
                        </div>
                        <div className="flex-auto">
                          <a href={item.link} className="block font-semibold text-gray-900">{item.name}</a>
                          <p className="mt-1 text-gray-600">Description for {item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleResourcesDropdown}
                  className="flex items-center gap-x-1 p-2 text-sm/6 font-semibold text-gray-900"
                >
                  Resources
                  <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ${isResourcesDropdownOpen ? 'block' : 'hidden'}`}>
                  <div className="p-4">
                    {[
                      { name: 'Test Location', link: '/home/Recources/Testlocation' },
                      { name: 'Driving Tips', link: '/home/Recources/DrivingTips' }
                    ].map(item => (
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" key={item.name}>
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                          </svg>
                        </div>
                        <div className="flex-auto">
                          <a href={item.link} className="block font-semibold text-gray-900">{item.name}</a>
                          <p className="mt-1 text-gray-600">Description for {item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/Home/Premium/navigation" className="bg-white text-indigo-600  p-2 rounded text-sm font-bold hover:bg-yellow-300 transition duration-200">
                            Pass the First Time with Premium
                        </Link>           </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="/auth" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-10 bg-black opacity-30" onClick={toggleMobileMenu}></div>
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                  </a>
                  <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMobileMenu}>
                    <span className="sr-only">Close menu</span>
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <div className="-mx-3">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          aria-controls="disclosure-1"
                          aria-expanded={isDropdownOpen}
                          onClick={toggleDropdown}
                        >
                          help
                          <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {isDropdownOpen && (
                          <div className="mt-2 mr-3" id="disclosure-1">
                            {[
                              { name: 'Help', link: '/home/Help' },
                              { name: 'Engagement', link: '/engagement' }
                            ].map(item => (
                              <a href={item.link} className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50" key={item.name}>
                                {item.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="-mx-3">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          aria-controls="resources-dropdown"
                          aria-expanded={isResourcesDropdownOpen}
                          onClick={toggleResourcesDropdown}
                        >
                          Resources
                          <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                          </svg>
                        </button>
                        {isResourcesDropdownOpen && (
                          <div className="mt-2 mr-3" id="resources-dropdown">
                            {[
                              { name: 'Test Location', link: '/home/Recources/Testlocation' },
                              { name: 'Driving Tips', link: '/home/Recources/DrivingTips' }
                            ].map(item => (
                              <a href={item.link} className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50" key={item.name}>
                                {item.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
   
                      <Link to="/Home/Premium/navigation" className="bg-white text-indigo-600 my-4 p-2 rounded text-sm font-bold hover:bg-yellow-300 transition duration-200">
                            Pass the First Time with Premium
                        </Link> 
                    </div>
                    <div className="py-6">
                      <a href="#" className="-mx-3 block rounded-lg px-3  text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="relative isolate px-6 pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">Data to Enrich Your Online Business</h1>
              <p className="mt-8 text-lg font-medium text-white sm:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="#" className="text-sm font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,245.3C640,245,800,235,960,208C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
}

export default Navbar;
