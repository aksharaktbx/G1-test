import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have React Router installed

function Navhead() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <div>
      <header style={{backgroundColor:'#F2F3F7'}} className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
  <div className="flex lg:flex-1">
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
    </a>
  </div>

  <div className="hidden lg:flex lg:gap-x-12 justify-center flex-1">
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
      >
        Help
        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ${isDropdownOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          {[
            { name: 'Help', link: '/home/Help' },
            { name: 'FAQ', link: '/home/FQ&A' }
          ].map(item => (
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50" key={item.name}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                </svg>
              </div>
              <div className="flex-auto">
                <Link to={item.link} className="block font-semibold text-gray-900">{item.name}</Link>
                <p className="mt-1 text-gray-600">Description for {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="relative">
      <button
        type="button"
        onClick={toggleResourcesDropdown}
        className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
      >
        Resources
        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`absolute left-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 ${isResourcesDropdownOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          {[
            { name: 'Test Location', link: '/home/Recources/Testlocation' },
            { name: 'Driving Tips', link: '/home/Recources/DrivingTips' }
          ].map(item => (
            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50" key={item.name}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                </svg>
              </div>
              <div className="flex-auto">
                <Link to={item.link} className="block font-semibold text-gray-900">{item.name}</Link>
                <p className="mt-1 text-gray-600">Description for {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <a href="#" className="text-sm font-semibold text-gray-900">Company</a>
  </div>

  <div className="flex lg:hidden">
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={toggleMobileMenu}
    >
      <span className="sr-only">Open main menu</span>
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
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
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
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
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={toggleDropdown}
                      >
                        Help
                        <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {isDropdownOpen && (
                        <div className="mt-2 mr-3">
                          {[
                            { name: 'Help', link: '/home/Help' },
                            { name: 'Engagement', link: '/engagement' }
                          ].map(item => (
                            <Link to={item.link} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50" key={item.name}>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="-mx-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={toggleResourcesDropdown}
                      >
                        Resources
                        <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {isResourcesDropdownOpen && (
                        <div className="mt-2 mr-3">
                          {[
                            { name: 'Test Location', link: '/home/Recources/Testlocation' },
                            { name: 'Driving Tips', link: '/home/Recources/DrivingTips' }
                          ].map(item => (
                            <Link to={item.link} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50" key={item.name}>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Features</Link>
                    <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Marketplace</Link>
                    <Link to="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Company</Link>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navhead;
