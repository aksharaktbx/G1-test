import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomTable from '../Custom/Customtable';
import { IconButton, Menu, MenuItem, Select, FormControl, MenuItem as MuiMenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { toast } from 'react-toastify'; // Import Toastify

const Questions = () => {
  const [data, setData] = useState([]); // Ensure this is an empty array
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  // Fetch all data from the API
  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/getquestions'); // No pagination here
        const questions = response.data; // Assuming the response contains an array of questions
        // Process and set data
        const processedQuestions = questions.map((question, index) => ({
          ...question,
          id: index+1, // Assign a simple ID based on the MongoDB _id
          actions: (
            <div>
              <IconButton onClick={(e) => handleClick(e, question)}>  {/* Pass the question to handleClick */}
                <MoreVertIcon />
              </IconButton>
            </div>
          ),
          questionText: question.questionText,
          image: <img src={`http://localhost:5000/uploads/${question.image}`} alt="Question" className="w-16 h-16" />,
          options: (
            <FormControl fullWidth>
              <Select
                value=""
                onChange={(e) => console.log('Selected option:', e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MuiMenuItem value="" disabled>
                  <em>View</em>
                </MuiMenuItem>
                {question.options.map((opt, index) => (
                  <MuiMenuItem key={index} value={opt}>
                    {opt}
                  </MuiMenuItem>
                ))}
              </Select>
            </FormControl>
          ),
          correctAnswer: question.correctAnswer,
          category: question.category,
        }));

        setData(processedQuestions); // Set the fetched data
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []); // Fetch once when the component is mounted

  // Handle click for the action menu
  const handleClick = (event, question) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(question); // Set selected question here
  };

  // Close the action menu
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  // Handle edit action
  const handleEdit = () => {
    console.log('Edit action for:', selectedRow);
    handleClose();
  };

  // Handle delete action
  const handleDelete = async () => {
    console.log(selectedRow._id)
    try {
      const response = await axios.delete(`http://localhost:5000/delete/${selectedRow._id}`);
      if (response.status === 200 || response.status === 201) {
        // Show toast notification on success
        toast.success('Question deleted successfully');
        // Remove the deleted row from data
        setData(prevData => prevData.filter(row => row.id !== selectedRow.id)); // Properly update state
        handleClose(); // Close the menu after deletion
      } else {
        toast.error('Failed to delete question');
      }
    } catch (error) {
      console.error('Error deleting question:', error);
      toast.error('Failed to delete question');
    }
  };

  // Define table columns
  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'questionText', label: 'Question' },
    { id: 'image', label: 'Image' },
    { id: 'options', label: 'Options' },
    { id: 'correctAnswer', label: 'Correct Answer' },
    { id: 'category', label: 'Category' },
    { id: 'actions', label: 'Actions' },
  ];

  // If loading, show loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 mt-6 mb-4">Questions</h1>

      {/* Render CustomTable */}
      <CustomTable columns={columns} data={data} rowsPerPageOptions={[5, 10, 25]} />

      {/* Action Menu (Edit/Delete) */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default Questions;
