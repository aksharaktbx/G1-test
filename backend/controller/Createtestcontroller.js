const Test = require('../modal/createtestmodal');
const UserTestProgress=require('../modal/usertestprogresstrackmodal')
// const Question = require('../models/Question');
// Create a new diagnostic test
exports.createTest = async (req, res) => {
    const { testName, questionIds, passingScore, passingMarks, testLevelName, testDescription } = req.body;
  
    try {
      // Validate required fields
      if (!testName || !questionIds  || !testLevelName || !testDescription) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      // Create a new test instance with the provided data
      const newTest = new Test({
        testName,
        questions: questionIds,  // Array of ObjectId references to Question collection
        passingScore: passingScore || 80,  // Default to 80 if not provided
        passingMarks: passingMarks || 12,  // Default to 12 if not provided
        
        testLevelName,
        testDescription
      });
  
      // Save the new test to the database
      await newTest.save();
  
      // Send response with the created test
      res.status(201).json({ message: 'Test created successfully!', test: newTest });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create test', error: error.message });
    }
  };
  
  exports.getTestById = async (req, res) => {
    const { id } = req.params; // Extract the ID from request parameters
  
    try {
      // Find the test by its ID and populate the questions if needed
      const test = await Test.findById(id).populate('questions');
  
      if (!test) {
        return res.status(404).json({ message: 'Test not found' });
      }
  
      // Send the test data as response
      res.status(200).json({ message: 'Test fetched successfully!', test });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch test', error: error.message });
    }
  };
  // Evaluate the test results based on user responses
exports.getTestResults = async (req, res) => {
    const { testId, userAnswers } = req.body; // userAnswers: array of { questionId, answer }
  
    try {
      const test = await Test.findById(testId).populate('questions');
      const totalQuestions = test.questions.length;
      let correctAnswers = 0;
  
      // Evaluate the answers
      userAnswers.forEach((userAnswer) => {
        const question = test.questions.find(q => q._id.toString() === userAnswer.questionId);
        if (question.correctAnswer === userAnswer.answer) {
          correctAnswers++;
        }
      });
  
      const successRate = (correctAnswers / totalQuestions) * 100;
      const isPassed = successRate >= test.passingScore;
  
      res.status(200).json({
        result: {
          totalQuestions,
          correctAnswers,
          successRate,
          passed: isPassed,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to evaluate test results' });
    }
  };


  exports.startTest = async (req, res) => {
    const { testId, userId } = req.body; // userId to track the user and testId for the specific test
  
    try {
      // Find the test by its ID and populate the questions
      const test = await Test.findById(testId).populate('questions');
  
      if (!test) {
        return res.status(404).json({ message: 'Test not found' });
      }
  
      const totalQuestions = test.questions.length; // Calculate the total number of questions
  
      // Find or create the user's progress record for this test
      let userProgress = await UserTestProgress.findOne({ testId, userId });
  
      if (!userProgress) {
        // If no progress record exists, create a new one
        userProgress = new UserTestProgress({
          userId,
          testId,
          answeredQuestions: [],
          totalNumberofQuestions: totalQuestions, // Store total number of questions
          progress: 0, // Start from the first question
        });
        await userProgress.save();
      }
  
      // If progress is equal to total number of questions, the test is complete
      if (userProgress.progress >= totalQuestions) {
        return res.status(200).json({
          message: 'Test already completed.',
          progress: userProgress.progress,
          totalQuestions: userProgress.totalNumberofQuestions,
        });
      }
  
      // Get questions starting from where the user left off
      const remainingQuestions = test.questions.slice(userProgress.progress);
  
      res.status(200).json({
        message: 'Test resumed successfully!',
        testName: test.testName,
        questions: remainingQuestions, // Return only unanswered questions
        progress: userProgress.progress, // Current progress
        totalQuestions: userProgress.totalNumberofQuestions, // Total number of questions
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to resume the test.' });
    }
  };
  
