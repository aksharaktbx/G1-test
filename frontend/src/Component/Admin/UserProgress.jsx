import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomTable from '../Custom/Customtable';
import { useNavigate } from 'react-router-dom';

const UserProgress = () => {
  const [userProgressData, setUserProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  // Define table columns
  const columns = [
    { id: 'userId', label: 'User ID' },
    { id: 'totalQuestions', label: 'Total Questions' },
    { id: 'answeredQuestions', label: 'Answered Questions' },
    { id: 'correctAnswers', label: 'Answered Correctly' },
    { id: 'status', label: 'Status' },
    { id: 'result', label: 'Result' },
  ];

  const handleResult = (testId, userId) => {
    navigate('/dashboard/result', {
      state: { testId, userId },
    });
  };

  useEffect(() => {
    // Fetch user progress data from the API
    const fetchUserProgressData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/userprogress');
        // Process and format the data for the table
        const processedData = response.data.map((progress) => ({
          userId: progress.userId,
          totalQuestions: progress.totalNumberofQuestions,
          answeredQuestions: progress.progress,
          correctAnswers: progress.answeredQuestions.filter((q) => q.isCorrect).length,
          status: (
            <span
              style={{
                backgroundColor: progress.status === 'Complete' ? 'green' : 'red',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              {progress.status}
            </span>
          ),
          result: progress.status === 'Incomplete' ? (
            <div
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              style={{ cursor: 'not-allowed' }}
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </div>
          ) : (
            <div
    className="py-1 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
    style={{ cursor: 'pointer' }}
    onClick={() => handleResult(progress.testId, progress.userId)}
  >
    Click for Result
  </div>
          )
          
        }));

        setUserProgressData(processedData); // Update state with formatted data
        setLoading(false); // Stop the loading spinner
      } catch (err) {
        console.error('Error fetching user progress data:', err);
        setError('Failed to fetch user progress data.');
        setLoading(false);
      }
    };

    fetchUserProgressData();
  }, []);

  // Show loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there's an error
  if (error) {
    return <div>{error}</div>;
  }

  // Render the CustomTable with the processed data
  return (
    <div>
      <h1 className="text-2xl font-bold  mb-4">User Progress</h1>
      <CustomTable columns={columns} data={userProgressData} rowsPerPageOptions={[5, 10, 25]} />
    </div>
  );
};

export default UserProgress;
