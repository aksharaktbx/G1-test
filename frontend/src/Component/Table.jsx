import React from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import the necessary icons

function Table() {
  return (
    <div>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
            <h1 className="text-2xl font-semibold text-gray-800 p-6 border-b">Compare G1.ca to Other Sites</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b"></th>
                        <th className="py-2 px-4 border-b">Official MTO Site</th>
                        <th className="py-2 px-4 border-b">Other Practice Test Sites</th>
                        <th className="py-2 px-4 border-b bg-indigo-500 text-white">G1.ca</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ["Free & Registration-Free", "Yes", "Varies", "Yes"],
                        ["Mobile Apps", "No", "No", "Yes"],
                        ["Multiple G1 Practice Tests", "Only 8 questions", "2-3", "11"],
                        ["Based on the Driver's Manual", "Yes", "Often outdated", "Most recent version"],
                        ["Driver's Licence FAQ", "Yes", "No", "100+ questions"],
                        ["Question-Level Feedback", "No", "For the whole test", "For each question"],
                        ["Hints & Explanations", "No", "No", "Yes"],
                        ["Multiple Difficulty Levels", "No", "No", "Easy, Hard, Hardest"],
                        ["Marathon Test", "No", "No", "Yes"],
                        ["G1 Exam Simulator", "No", "No", "Yes"],
                        ["Challenge Bank™", "No", "No", "Yes"]
                    ].map((row, index) => (
                        <tr key={index} className="border-b mb-10">
                            <td className="py-2 px-4">{row[0]}</td>
                            <td className="py-2 px-4 text-center">
                                {row[1] === "Yes" ? <FaCheckCircle className="text-green-500 text-center mx-auto" /> : row[1] === "No" ? <FaTimesCircle className="text-red-500 mx-auto" /> : row[1]}
                            </td>
                            <td className="py-2 px-4 text-center">
                                {row[2] === "Yes" ? <FaCheckCircle className="text-green-500 text-center mx-auto" /> : row[2] === "No" ? <FaTimesCircle className="text-red-500 mx-auto" /> : row[2]}
                            </td>
                            <td className="py-2 px-4 text-center bg-indigo-500 text-white mx-auto">
                                {row[3] === "Yes" ? <FaCheckCircle className='mx-auto' /> : row[3] === "No" ? <FaTimesCircle /> : row[3]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table
