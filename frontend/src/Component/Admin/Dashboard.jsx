// src/Dashboard.js

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import Profile from './Profile'; // Assuming you have a Profile component
import Dsahboardcontent from './Dsahboardcontent';
import AddQuestion from './AddQuestion';
import AddTest from './AddTest';
import UserData from './UserData';
import Questions from './Questions';
import Managetest from './Managetest';

const Dashboard = () => {
    return (
        <div className="flex w-full ">
            {/* Left Sidebar (Fixed and Full Height) */}
            <div className="w-[20%] h-full bg-indigo-600 text-white p-5 border-r fixed top-0 left-0 bottom-0">
                <h2 className="text-xl font-bold text-center">Dashboard</h2>
                <ul className="mt-5">
                    <li className="mt-4">
                        <Link to="/dashboard/overview" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Overview</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/manage-test" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Details</Link>
                    </li>
                    
                    <li className="mt-4">
                        <Link to="/dashboard/Add-test" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Add Test</Link>
                    </li>
                    
                    <li className="mt-4">
                        <Link to="/dashboard/Addquestion" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Add Question</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/questions" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded"> Questions</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/settings" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Settings</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/User-data" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">User Data</Link>
                    </li>
                    
                </ul>
            </div>

            {/* Right Side Content (Scrollable) */}
            <div className="w-[80%]  h-full ml-[20%]    ">
                {/* Header section (Sticky) */}
                <div className="sticky top-0 right-0 z-10 bg-indigo-600 p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-white text-xl font-semibold">My Application</h1>
                        <div className="relative">
                            <FontAwesomeIcon icon={faUserCircle} className="text-white text-2xl cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="p-4  overflow-auto">
  <Routes>
    <Route path='/' element={<Dsahboardcontent/>} />
    <Route path="/dashboard/profile" element={<Profile />} />

    <Route path="/dashboard/manage-test" element={<Managetest/>} />
    <Route path='/dashboard/Addquestion' element={<AddQuestion />} />
  
    <Route path='/dashboard/questions' element={<Questions/>
    } />

    <Route path='/dashboard/Add-test' element={<AddTest/>}/>
    <Route path='/dashboard/User-data' element={<UserData/>}/>
    {/* Add more routes as needed */}
  </Routes>
</div>

            </div>
        </div>
    );
};

export default Dashboard;
