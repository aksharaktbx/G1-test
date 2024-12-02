import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomTable from '../Custom/Customtable';
import { IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const Questions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openImageModal, setOpenImageModal] = useState(false); // For controlling the image modal
  const [imageUrl, setImageUrl] = useState(''); // For storing the image URL to be displayed in the modal

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/getquestions');
        const questions = response.data;
        const processedQuestions = questions.map((question, index) => ({
          ...question,
          id: index + 1,
          actions: (
            <div>
              <IconButton onClick={() => handleEdit(question)} color="primary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(question)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </div>
          ),
          questionText: question.questionText,
          image: (
            <img 
              src={`http://localhost:5000/uploads/${question.image}`} 
              alt="Question" 
              className="w-14 h-8 object-cover border border-gray-300 cursor-pointer"
              onClick={() => openImage(question.image)} // Trigger the image modal
            />
          ),
          options: (
            <div>
              {/* You can add options logic here */}
            </div>
          ),
          correctAnswer: question.correctAnswer,
          category: question.testName.testName,
        }));

        setData(processedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleEdit = (question) => {
    console.log('Edit action for:', question);
    navigate(`/dashboard/edit-question/${question._id}`);
  };

  const handleDelete = async (question) => {
    console.log('Delete action for:', question._id);
    try {
      const response = await axios.delete(`http://localhost:5000/delete/${question._id}`);
      if (response.status === 200 || response.status === 201) {
        toast.success('Question deleted successfully');
        setData(prevData => prevData.filter(row => row.id !== question.id));
      } else {
        toast.error('Failed to delete question');
      }
    } catch (error) {
      console.error('Error deleting question:', error);
      toast.error('Failed to delete question');
    }
  };

  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'questionText', label: 'Question' },
    { id: 'image', label: 'Image' },
    { id: 'options', label: 'Options' },
    { id: 'correctAnswer', label: 'Correct Answer' },
    { id: 'category', label: 'Category' },
    { id: 'actions', label: 'Actions' },
  ];

  const handleAddQuestion = () => {
    navigate('/dashboard/Addquestion');
  };

  // Open image in modal
  const openImage = (image) => {
    setImageUrl(`http://localhost:5000/uploads/${image}`);
    setOpenImageModal(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setOpenImageModal(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Questions</h1>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddQuestion}
        >
          Add Question
        </Button>
      </div>
      {/* Custom Table rendering */}
      <CustomTable columns={columns} data={data} rowsPerPageOptions={[5, 10, 25]} />

      {/* Modal to show image */}
      <Dialog open={openImageModal} onClose={closeImageModal}>
        <DialogTitle>Question Image</DialogTitle>
        <DialogContent>
          <img 
            src={imageUrl} 
            alt="Question" 
            className="w-full h-auto object-contain" 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeImageModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Questions;
