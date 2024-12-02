import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material'; // Material UI components for card layout

const UserProgress = () => {
  const [userProgressData, setUserProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user progress data from the API
    const fetchUserProgressData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/userprogress');
        setUserProgressData(response.data); // Set the fetched data to state
        setLoading(false); // Stop the loading spinner
      } catch (err) {
        console.error('Error fetching user progress data:', err);
        setError('Failed to fetch user progress data.');
        setLoading(false);
      }
    };

    fetchUserProgressData();
  }, []);

  // If loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, show the error message
  if (error) {
    return <div>{error}</div>;
  }

  // Render the user progress data in cards, grouped by userId
  return (
    <div>
      <h1 className="text-2xl font-bold mt-6 mb-4">User Progress</h1>

      <Grid container spacing={4}>
        {userProgressData.map((progress) => (
          <Grid item xs={12} sm={6} md={4} key={progress._id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">User ID: {progress.userId}</Typography>
                <Typography variant="body2">Status: {progress.status}</Typography>
                <Typography variant="body2">Total Questions: {progress.totalNumberofQuestions}</Typography>
                <Typography variant="body2">Answered Questions: {progress.progress}</Typography>
                <Typography variant="body2">
                  Answered Correctly: {progress.answeredQuestions.filter(q => q.isCorrect).length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserProgress;
