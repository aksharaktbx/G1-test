import React, { useState } from 'react';
import Footer from '../Footer';
import Navhead from '../Navhead';

function LoginPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here, e.g., API call
    console.log('Email submitted:', email);
  };

  return (
    <div>
      <Navhead />

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
