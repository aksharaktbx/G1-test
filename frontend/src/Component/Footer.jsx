import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="py-16 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/4 p-4">
                            <div className="wow fadeInLeft" data-wow-delay="0.2s">
                                <h3 className="text-lg font-semibold text-gray-800">Get in Touch</h3>
                                <p className="text-gray-600 mb-4">Don’t miss any updates of our new templates and extensions!</p>
                                <form action="#" className="flex">
                                    <input type="text" name="EMAIL" className="border rounded-l px-4 py-2" placeholder="Email" />
                                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-r" type="submit">Subscribe</button>
                                </form>
                                <p className="mchimp-errmessage hidden"></p>
                                <p className="mchimp-sucmessage hidden"></p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 p-4">
                            <div className="wow fadeInLeft mx-10" data-wow-delay="0.4s">
                                <h3 className="text-lg font-semibold text-gray-800 mx-10">Download</h3>
                                <ul className="list-none mx-10">
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Company</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Android App</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">iOS App</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Desktop</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Projects</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 p-4">
                            <div className="wow fadeInLeft mx-10" data-wow-delay="0.6s">
                                <h3 className="text-lg font-semibold text-gray-800 mx-10">Help</h3>
                                <ul className="list-none mx-10">
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Company</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Android App</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">iOS App</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Desktop</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">Projects</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-indigo-700">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 p-4">
                            <div className="wow fadeInLeft" data-wow-delay="0.8s">
                                <h3 className="text-lg font-semibold text-gray-800">Team Solutions</h3>
                                <div className="flex space-x-2">
                                    <a href="#" className="bg-gray-300 rounded-full p-2 hover:bg-purple-600 hover:text-white transition-colors">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="bg-gray-300 rounded-full p-2 hover:bg-purple-600 hover:text-white transition-colors">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="bg-gray-300 rounded-full p-2 hover:bg-purple-600 hover:text-white transition-colors">
                                        <FaGooglePlusG />
                                    </a>
                                    <a href="#" className="bg-gray-300 rounded-full p-2 hover:bg-purple-600 hover:text-white transition-colors">
                                        <FaTelegramPlane />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
