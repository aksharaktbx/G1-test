const Question = require('../modal/Createquestionmodal');
const mongoose = require('mongoose');



// Add a new question to the database
const addQuestion = async (req, res) => {
  try {
    const { questionText, options, correctAnswer, testName, testLevel, testTitle } = req.body;
    
    // Validate that all required fields are present
    if (!testName || !testLevel || !testTitle) {
      return res.status(400).json({ message: 'Test Name, Test Level, and Test Title are required' });
    }

    let image = req.file ? req.file.originalname : null; // Get the image filename if uploaded

    // Create a new question document with the references and other data
    const newQuestion = new Question({
      questionText,
      options,
      correctAnswer,
      image, // Store the image filename (not the path)
      testName, // Reference to TestName
      testLevel, // Reference to TestLevel
      testTitle, // Reference to TestTitle
    });

    // Save the new question to the database
    await newQuestion.save();

    // Return success response with the created question data
    res.status(201).json({ message: 'Question added successfully!', question: newQuestion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add question' });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params; // Get the question ID from the request parameters

    // Find and delete the question by ID
    const deletedQuestion = await Question.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete question' });
  }
};
const editQuestion = async (req, res) => {
  try {
    const { id } = req.params; // Get the question ID from the request parameters
    const { questionText, options, correctAnswer, category } = req.body; // Get updated question data
    let image = req.file ? req.file.originalname : null; // If an image is uploaded, get the filename

    // Find the question by ID and update it
    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { questionText, options, correctAnswer, category, image },
      { new: true } // Return the updated document
    );

    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json({ message: 'Question updated successfully', question: updatedQuestion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update question' });
  }
};



// Retrieve all questions for a specific test category
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch questions' });
  }
};



const getQuestionsByTest = async (req, res) => {
  try {
    const { testName, testLevel, testTitle } = req.params; // Use params instead of query parameters

    // Validate that the required params are present
    if (!testName || !testLevel || !testTitle) {
      return res.status(400).json({ message: 'Test Name, Test Level, and Test Title are required' });
    }

    // Convert the params to ObjectId if they are valid
    const testNameObjectId = new mongoose.Types.ObjectId(testName);
    const testLevelObjectId = new mongoose.Types.ObjectId(testLevel);
    const testTitleObjectId = new mongoose.Types.ObjectId(testTitle);

    // Query the database for questions matching the params
    const questions = await Question.find({
      testName: testNameObjectId, // Match the testName ID
      testLevel: testLevelObjectId, // Match the testLevel ID
      testTitle: testTitleObjectId, // Match the testTitle ID
    });

    // If no questions are found, return a 404 error
    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for the provided criteria' });
    }

    // Calculate the total number of questions
    const totalQuestions = questions.length;

    // Return the questions and total count in the response
    res.status(200).json({
      message: 'Questions fetched successfully!',
      totalQuestions, // Add total count
      questions,      // Return the actual questions
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch questions' });
  }
};

module.exports = { addQuestion, getQuestions ,deleteQuestion ,editQuestion,getQuestionsByTest };
