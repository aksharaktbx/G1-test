import React, { useState } from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function DrivingTips() {
    const [currentPage, setCurrentPage] = useState(1);
    const tipsPerPage = 3; // Number of tips per page
    const tips = [
        {
            title: "How to Renew a Driver’s Licence in Ontario",
            imageUrl: "https://img.freepik.com/premium-vector/woman-standing-red-car-showing-paper-document-car-insurance-concept-cartoon-vector-illustration-white-background_223337-4587.jpg",
        },
        {
            title: "Can You Drive on the Highway with a G2 Licence?",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsNDfzo7ufVIjsLTL1eanHYO4REVAKkW41zKPR90fLfqiTfXPiXHyArzuNOyNfDiyZuM8&usqp=CAU",
        },
        {
            title: "Differences Between Ontario’s G2 and Full G Licences",
            imageUrl: "https://c8.alamy.com/comp/FRF6M7/young-boy-driving-car-FRF6M7.jpg",
        },
        {
            title: "Understanding the G1 Test Signs",
            imageUrl: "https://t3.ftcdn.net/jpg/02/04/45/68/360_F_204456881_51vJhhI3udmuQtOqZ2uZykISol60wjgs.jpg",
        },
        {
            title: "Who Can a G1 Driver Drive With?",
            imageUrl: "https://t3.ftcdn.net/jpg/00/95/52/68/360_F_95526854_RkX08anJzuIlRx495qpbULSWM919Lloc.jpg",
        },
        {
            title: "5 Rules Every G1 Driver Should Know",
            imageUrl: "https://media.istockphoto.com/id/600096480/vector/cartoon-man-driving-a-car.jpg?s=612x612&w=0&k=20&c=qWm7uFNMqzTc1VkiKwWsrXhKQpG8YHzy1Z2f-UhSKK8=",
        },
    ];

    // Calculate current tips to display
    const indexOfLastTip = currentPage * tipsPerPage;
    const indexOfFirstTip = indexOfLastTip - tipsPerPage;
    const currentTips = tips.slice(indexOfFirstTip, indexOfLastTip);
    const totalPages = Math.ceil(tips.length / tipsPerPage);

    return (
        <div>
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-2xl font-bold">g1.ca</div>
                </div>
                <div className="flex space-x-4 p-2">
                    <a href="#" className="text-white mt-2">G1 Test Simulator</a>
                    <Link to="/auth" className="text-white mt-2">Premium Login</Link>
                    <Link to="/Home/Premium/navigation" className="bg-white hover:bg-yellow-400 text-black px-4 py-2 rounded">Pass the First Time with Premium</Link>
                </div>
            </header>
            <main className="p-8">
                <h1 className="text-4xl font-bold text-center mt-5 mb-4">
                    <span className="text-black">Driving Tips:</span> How to Pass Your Test and Be a Good Driver
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                    {currentTips.map((tip, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img src={tip.imageUrl} alt={tip.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-indigo-600">{tip.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <nav className="flex space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`px-4 py-2 rounded-lg transition-colors duration-200 
                                    ${currentPage === number ? 'bg-indigo-600 text-white' : 'bg-white text-blue-600'} 
                                    border border-blue-600 hover:bg-indigo-700 hover:text-white`}
                            >
                                {number}
                            </button>
                        ))}
                    </nav>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DrivingTips;
