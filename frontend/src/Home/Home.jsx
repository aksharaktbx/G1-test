import React from 'react';
import Navbar from '../Component/Navbar';
import CustomCards from '../Component/Custom/CustomCards' 
import Tabbar from '../Component/Tabbar'
import { FaBookOpen, FaTasks, FaDesktop, FaTrophy } from 'react-icons/fa';

import Footer from '../Component/Footer';
import Table from '../Component/Table';
import Testimonials from '../Component/Testomonial';

function Home() {
    return (
        <>
       
            <Navbar />
            <Tabbar />
            <div className="">
                <div className="text-center py-12">
                    <h2 className="text-blue-600 text-sm font-semibold mt-5 mb-5">A SIMPLE, FUN WAY TO PREPARE</h2>
                    <h1 className="text-4xl font-bold mt-5">How It Works</h1>
                    <div className="flex flex-wrap justify-center mt-10 p-5 space-x-8">
                        <CustomCards
                            icon={<FaBookOpen className="text-blue-600" />}
                            title="Read the Handbook"
                            description={
                                <>You can find it online on the <a href="#" className="text-blue-600">official MTO website</a>, order a complete printed copy from <a href="#" className="text-blue-600">ServiceOntario</a> ($14.95), or get one from your local Canadian Tire.</>
                            }
                        />
                        <CustomCards
                            icon={<FaTasks className="text-blue-600" />}
                            title="Take all the practice tests"
                            description="Our 12 tests are designed to cover all the need-to-know information from the Driver's Handbook. Ace them all, and the official test will seem easy!"
                        />
                        <CustomCards
                            icon={<FaDesktop className="text-blue-600" />}
                            title="Take the Simulator"
                            description="Designed to look and feel just like the 'real thing,' our G1 Test Simulator produces a new set of questions each time you take it."
                        />
                        <CustomCards
                            icon={<FaTrophy className="text-blue-600" />}
                            title="Pass your G1 test at DriveTest"
                            description="When you’ve prepared sufficiently, it’s time to make your appointment at the DriveTest Centre. You’ll be ready to pass on the first try!"
                        />
                    </div>
                
                </div>
                
                <div className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-center text-blue-600 text-sm font-bold">BASED ON THE MTO DRIVER’S HANDBOOK</h2>
    <h1 className="text-center text-4xl font-bold mt-2">Questions designed to feel just like the real experience</h1>
    <div className="flex flex-col md:flex-row mt-12">
        <div className="flex-1">
            <img src="https://www.g1.ca/images/hero-02.svg" alt="Illustration of a person holding question cards" className="w-full h-auto"/>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <h3 className="text-xl font-bold">Specific to Ontario</h3>
            <p className="mt-2 text-gray-700">While some sites will provide you with a mix of questions based on MTO G1 rules and questions based on other sources, we write all our original questions with information straight from the official Driver’s Handbook.</p>
            <h3 className="text-xl font-bold mt-6">Current and correct</h3>
            <p className="mt-2 text-gray-700">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
            <h3 className="text-xl font-bold mt-6">Almost like the real exam</h3>
            <p className="mt-2 text-gray-700 mb-10">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
        </div>
    </div>
    <hr className="border-t border-dotted border-gray-500 mt-10 my-5" />
</div>


<div className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-center text-blue-600 text-sm font-bold">BASED ON THE MTO DRIVER’S HANDBOOK</h2>
    <h1 className="text-center text-4xl font-bold mt-2">Questions designed to feel just like the real experience</h1>
    <div className="flex flex-col md:flex-row mt-12">
      
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <h3 className="text-xl font-bold">Specific to Ontario</h3>
            <p className="mt-2 text-gray-700">While some sites will provide you with a mix of questions based on MTO G1 rules and questions based on other sources, we write all our original questions with information straight from the official Driver’s Handbook.</p>
            <h3 className="text-xl font-bold mt-6">Current and correct</h3>
            <p className="mt-2 text-gray-700">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
            <h3 className="text-xl font-bold mt-6">Almost like the real exam</h3>
            <p className="mt-2 text-gray-700 mb-10">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
        </div>
        <div className="flex-1">
            <img src="https://www.g1.ca/images/hero-02.svg" alt="Illustration of a person holding question cards" className="w-full mx-5 mt-5 h-auto"/>
        </div>

    </div>
    <hr className="border-t border-dotted border-gray-500 mt-10 my-5" />

</div>
<div className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-center text-blue-600 text-sm font-bold">BASED ON THE MTO DRIVER’S HANDBOOK</h2>
    <h1 className="text-center text-4xl font-bold mt-2">Questions designed to feel just like the real experience</h1>
    <div className="flex flex-col md:flex-row mt-12">
        <div className="flex-1">
            <img src="https://www.g1.ca/images/hero-02.svg" alt="Illustration of a person holding question cards" className="w-full h-auto"/>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <h3 className="text-xl font-bold">Specific to Ontario</h3>
            <p className="mt-2 text-gray-700">While some sites will provide you with a mix of questions based on MTO G1 rules and questions based on other sources, we write all our original questions with information straight from the official Driver’s Handbook.</p>
            <h3 className="text-xl font-bold mt-6">Current and correct</h3>
            <p className="mt-2 text-gray-700">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
            <h3 className="text-xl font-bold mt-6">Almost like the real exam</h3>
            <p className="mt-2 text-gray-700 mb-10">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
        </div>
    </div>
    <hr className="border-t border-dotted border-gray-500 mt-10 my-5" />
</div>
<div className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-center text-blue-600 text-sm font-bold">BASED ON THE MTO DRIVER’S HANDBOOK</h2>
    <h1 className="text-center text-4xl font-bold mt-2">Questions designed to feel just like the real experience</h1>
    <div className="flex flex-col md:flex-row mt-12">
      
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
            <h3 className="text-xl font-bold">Specific to Ontario</h3>
            <p className="mt-2 text-gray-700">While some sites will provide you with a mix of questions based on MTO G1 rules and questions based on other sources, we write all our original questions with information straight from the official Driver’s Handbook.</p>
            <h3 className="text-xl font-bold mt-6">Current and correct</h3>
            <p className="mt-2 text-gray-700">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
            <h3 className="text-xl font-bold mt-6">Almost like the real exam</h3>
            <p className="mt-2 text-gray-700 mb-10">Our practice tests are written using the latest version of the Handbook, so they’re always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you’re never dealing with out-of-date test information.</p>
        </div>
        <div className="flex-1">
            <img src="https://www.g1.ca/images/hero-02.svg" alt="Illustration of a person holding question cards" className="w-full mx-5 mt-5 h-auto"/>
        </div>

    </div>
    <hr className="border-t border-dotted border-gray-500 mt-10 my-5" />

</div>
<Table/>
<Testimonials/>

            <Footer/>  
            </div>
        </>
    );
}

export default Home;
