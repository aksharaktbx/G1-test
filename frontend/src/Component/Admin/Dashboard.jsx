// src/Dashboard.js

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import Profile from './Profile'; // Assuming you have a Profile component
import DashboardContent from './Dashboardcontent';
import AddQuestion from './AddQuestion';
import AddTest from './AddTest';
import UserData from './UserData';
import Questions from './Questions';
import Managetest from './Managetest';
import Showtest from './Showtest';
import UpdateQuestion from './UpdateQuestion';
import UserProgress from './UserProgress';
import Result from '../Result/Result';
import Resultpage from './Resultpage';
import Managesubcription from './Managesubcription';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen"> {/* Ensure the entire page takes at least full height */}
            {/* Left Sidebar (Fixed and Full Height) */}
            <div style={{ backgroundColor: '#233043' }} className="w-[17%] h-full bg-indigo-600 text-white p-5 border-r fixed top-0 left-0 bottom-0 rounded-md ">
                <h2 className="text-xl font-bold text-center">Dashboard</h2>
                <ul className="mt-5">
                    <li className="mt-4">
                        <Link to="/dashboard/manage/subscription" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Manage Subscription</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/manage-test" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Test Management</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/Add-test" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Add Test</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/show-test" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Show Test</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/Addquestion" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Add Question</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/questions" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">Questions</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/userProgress" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">User Progress</Link>
                    </li>
                    <li className="mt-4">
                        <Link to="/dashboard/User-data" className="text-white hover:bg-white hover:text-indigo-600 block px-3 py-2 rounded">User Data</Link>
                    </li>
                </ul>
            </div>

            {/* Right Side Content (Scrollable and Full Screen) */}
            <div style={{backgroundColor:'#F0F2F5'}} className="w-[83%] h-full ml-[17%] min-h-screen">
                {/* Header section (Sticky) */}
                <div className="sticky bg-white top-0 right-0 z-10 p-4 mb-4 border-b">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold">My Application</h1>
                        <div className="relative">
                            <FontAwesomeIcon icon={faUserCircle} className=" text-2xl cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Main Content (Scrollable) */}
                <div className="p-6 overflow-auto min-h-screen">
                    <Routes>
                        <Route path='/dashboard' element={<DashboardContent />} />
                        <Route path="/dashboard/profile" element={<Profile />} />
                        <Route path="/dashboard/manage-test" element={<Managetest />} />
                        <Route path='/dashboard/Addquestion' element={<AddQuestion />} />
                        <Route path='/dashboard/edit-question/:id' element={<UpdateQuestion />} />
                        <Route path='/dashboard/questions' element={<Questions />} />
                        <Route path='/dashboard/Add-test' element={<AddTest />} />
                        <Route path='/dashboard/show-test' element={<Showtest />} />
                    
                        <Route path='/dashboard/userProgress' element={<UserProgress/>} />
                        <Route path='/dashboard/result' element={<Resultpage/>} />
                        <Route path='/dashboard/User-data' element={<UserData />} />

                        {/* subscription */}

                        <Route path=' /dashboard/manage/subscription' element={<Managesubcription/>} />

                        {/* Add more routes as needed */}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
