import React from 'react';
import { FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';
import Footer from '../Footer';
import{Link} from 'react-router-dom'
function TestLocation() {
    const cities = [
        ["Ajax", "Dresden", "Kemptville", "North Bay", "Spragge"],
        ["Alexandria", "Dryden", "Kenora", "North York", "St. Catharines"],
        ["Alliston", "Dubreuilville", "Keswick", "Norwich", "St. Charles"],
        ["Amherstburg", "Dundas", "Killaloe", "Norwood", "St. Thomas"],
        ["Arnprior", "Dunnville", "Kincardine", "Oakville", "Stayner"],
        ["Atikokan", "Durham", "Kingston", "Orangeville", "Stoney Creek"],
        ["Aurora", "Dutton", "Kirkland Lake", "Orillia", "Stouffville"],
        ["Aylmer", "Ear Falls", "Kitchener", "Oshawa", "Stratford"],
        ["Bancroft", "Eganville", "Lakefield", "Ottawa", "Strathroy"],
        ["Barrie", "Elgin", "Leamington", "Owen Sound", "Sturgeon Falls"],
    ];

    return (
        <>
            <div className="flex flex-col items-center bg-indigo-600">
                <header className="w-full flex justify-between items-center p-4 bg-indigo-600">
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt="Logo" className="mr-2" />
                        <span className="text-xl font-bold text-gray-800">g1.ca</span>
                    </div>
                    <nav className="flex items-center space-x-4 md:space-x-6">
                        <a href="#" className="text-sm text-white">G1 Test Simulator</a>
                        <Link to="/auth" className="text-sm text-white">Premium Login</Link>
                        <Link to="/Home/Premium/navigation" className="bg-white text-indigo-600 px-4 py-2 rounded text-sm font-bold hover:bg-yellow-300 transition duration-200">
                            Pass the First Time with Premium
                        </Link>
                    </nav>
                </header>

                <main className="text-center mt-10 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl mt-5 font-bold mb-4 text-white">Service Ontario and DriveTest: Find Your Nearest Location</h1>
                    <p className="text-sm mb-6 mt-4 text-white">
                        Instantly find your nearest location and see if it's open today. Check hours of operation, address, contact information, and specific Ontario driver's license services provided with our interactive map. 
                        <span className="font-bold"> Note:</span> Due to COVID-19 restrictions, please call your location before visiting to ensure it is open.
                    </p>
                    <div className="flex justify-center items-center mb-6 flex-col sm:flex-row">
                        <input
                            type="text"
                            placeholder="Enter your city/town or postal code"
                            className="p-3 rounded-l-full border border-gray-300 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <button type="button" className="bg-blue-700 mt-5 sm:mt-0 sm:mx-4 text-white p-3 rounded-r-full flex items-center hover:bg-white hover:text-indigo-600 transition duration-200">
                            <FaLocationArrow className="mr-2" /> Use My Location
                        </button>
                    </div>
                    <div className="flex justify-center space-x-10 mb-10">
                        <div className="flex flex-col items-center mt-5">
                            <FaMapMarkerAlt className="text-red-500 text-3xl mb-2" />
                            <span className="font-semibold text-white">Service Ontario</span>
                        </div>
                        <div className="flex flex-col items-center mt-5">
                            <FaMapMarkerAlt className="text-green-500 text-3xl mb-2" />
                            <span className="font-semibold text-white">DriveTest</span>
                        </div>
                    </div>
                </main>
            </div>

            <div className="w-full mb-10">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43602644088!2d75.62574649726879!3d26.88542138946675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1732011334058!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Find Service Ontario and DriveTest locations in your city</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-10 p-10 text-left gap-4 mt-5 text-gray-700">
                    {cities.map((column, colIndex) => (
                        <div key={colIndex}>
                            {column.map((city, cityIndex) => (
                                <p key={cityIndex} className="text-left">{city}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-indigo-100 mt-5 py-8">
                <div className="p-8 mx-auto text-center mb-8" style={{ width: '70%' }}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <button type="button" className="bg-white border border-indigo-500 text-indigo-500 py-2 px-4 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300">G1 practice test</button>
                        <button type="button" className="bg-white border border-indigo-500 text-indigo-500 py-2 px-4 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300">M1 practice test</button>
                        <button type="button" className="bg-white border border-indigo-500 text-indigo-500 py-2 px-4 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300">G1 FAQ</button>
                        <button type="button" className="bg-white border border-indigo-500 text-indigo-500 py-2 px-4 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition duration-300">Driving tips</button>
                    </div>
                    <div className="flex justify-center space-x-8">
                        <a href="#" className="text-indigo-500 hover:underline">Visit ServiceOntario website</a>
                        <a href="#" className="text-indigo-500 hover:underline">Visit Drive Test website</a>
                    </div>
                </div>
                <div className='p-10'>
                <div className=" p-10 mx-auto">
                    <h2 className="text-2xl  mb-4">How to use the location finder</h2>
                    <p className="text-gray-700">The Service Ontario and DriveTest location finder speeds up the process by allowing you to search for your local office. Use the search bar to search by exact address, city, or postal code. Alternatively, click the <button type="button" className="bg-gray-200 border border-gray-400 text-gray-700 py-1 px-2 rounded-full inline-flex items-center"><FaLocationArrow className="mr-1" /> use my location</button> button above the map, and we’ll automatically display the DriveTest and Service Ontario offices near you so you can choose the closest one. Currently, the location finder includes all DriveTest and Service Ontario offices for Ontario, Canada.</p>
                </div>
                <div className='p-10'>
                    <h2 className="text-2xl  mb-4">Access your province’s official information</h2>
                    <p className="text-gray-700">The world is changing, but one thing has stayed the same: You still have to go to Service Ontario to get your driver’s licence, licence plates, renew your sticker, get a health card or change an address. You need to go to the appropriate location for these services.</p>
                </div>
                <div className='p-10'>
                    <h2 className="text-2xl  mb-4">Access your province’s official information</h2>
                    <p className="text-gray-700">The world is changing, but one thing has stayed the same: You still have to go to Service Ontario to get your driver’s licence, licence plates, renew your sticker, get a health card or change an address. You need to go to the appropriate location for these services.</p>
                </div> <div className='p-10'>
                    <h2 className="text-2xl  mb-4">Access your province’s official information</h2>
                    <p className="text-gray-700">The world is changing, but one thing has stayed the same: You still have to go to Service Ontario to get your driver’s licence, licence plates, renew your sticker, get a health card or change an address. You need to go to the appropriate location for these services.</p>
                </div> <div className='p-10'>
                    <h2 className="text-2xl  mb-4">Access your province’s official information</h2>
                    <p className="text-gray-700">The world is changing, but one thing has stayed the same: You still have to go to Service Ontario to get your driver’s licence, licence plates, renew your sticker, get a health card or change an address. You need to go to the appropriate location for these services.</p>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default TestLocation;
