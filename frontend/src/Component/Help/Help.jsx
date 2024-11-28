import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <img src="https://placehold.co/40x40" alt="G1 logo" className="h-10 w-10"/>
            <span className="text-2xl font-semibold">g1.ca</span>
          </div>
          <div className="text-sm">
            <i className="fas fa-globe"></i> English <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="container mx-auto text-center mt-4">
          <h1 className="text-3xl font-semibold">Advice and answers from the G1 Premium Team</h1>
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="Search for articles..." 
              className="w-full max-w-lg px-4 py-2 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </header>
    <Link to="/home/help/premium">  <main className="container mx-auto mt-8 px-4">
        <div className="bg-white border hover:border-indigo-500 rounded-lg p-4 flex items-center space-x-4">
          <div className="text-4xl">
            <i className="fas fa-bookmark"></i>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Getting Started with G1 Premium</h2>
            <p className="text-gray-600">Just upgraded to Premium? Read this.</p>
            <div className="flex items-center space-x-2 mt-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s" alt="Author's avatar" className="h-10 w-10 rounded-full" style={{objectFit:"cover"}}/>
              <span className="text-sm text-gray-600">By Andrei</span>
              <span className="text-sm text-gray-600">• 21 articles</span>
            </div>
          </div>
        </div>
      </main></Link>
      <footer className="container mx-auto mt-16 px-4 text-center text-gray-500">
        <div className="flex justify-center items-center space-x-4">
          <img src="https://placehold.co/40x40" alt="G1 logo" className="h-10 w-10 opacity-50"/>
          <span className="text-lg font-semibold opacity-50">g1.ca</span>
        </div>
        <div className="mt-4 space-x-4">
          <Link to="#" className="text-gray-500 hover:text-gray-700">G1.ca</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-700">G1 Premium</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-700">About</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-700">Contact us</Link>
        </div>
        <div className="mt-4">
          <i className="fas fa-comment-dots"></i> We run on Intercom
        </div>
      </footer>
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg">
          <i className="fas fa-comment-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default Help;
