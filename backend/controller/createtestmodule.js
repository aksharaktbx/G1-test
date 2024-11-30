const UserTestProgress=require('../modal/usertestprogresstrackmodal')
const Test= require('../modal/createtestmodal');
const TestResult=require('../modal/testresultmodal')


// Controller method to create a test
exports.createTest = async (req, res) => {
  const { testNameId, testLevelId, testTitleId, testDescription } = req.body;

  // Validate input
  if (!testNameId || !testLevelId || !testTitleId || !testDescription) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Call the createTest method from the Test model to create the test
    const test = await Test.createTest(testNameId, testLevelId, testTitleId, testDescription);

    // Send a successful response with the test data
    res.status(201).json({
      message: 'Test created successfully',
      test: test,
    });
  } catch (error) {
    console.error('Error creating test:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
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
  

  exports.getResult = async (req, res) => {
    const { userId, testId } = req.params; // Fetch userId and testId from params
  
    try {
      // Find the user's progress for this test
      const userProgress = await UserTestProgress.findOne({ testId, userId });
  
      if (!userProgress) {
        return res.status(404).json({ message: 'User progress not found for this test.' });
      }
  
      const totalQuestions = userProgress.totalNumberofQuestions; // Get the total number of questions from userProgress
  
      // Check if the user has completed all questions
      if (userProgress.progress !== totalQuestions) {
        return res.status(400).json({
          message: 'Please complete the test before submitting for results.',
          progress: userProgress.progress,
          totalQuestions,
        });
      }
  
      // If all questions have been answered, calculate the result
      let correctAnswersCount = 0;
      userProgress.answeredQuestions.forEach((question) => {
        if (question.isCorrect) {
          correctAnswersCount++;
        }
      });
  
      const score = (correctAnswersCount / totalQuestions) * 100;
      const passingPercentage = 80;
      const passed = score >= passingPercentage;
  
      // Save the result to the TestResult collection in MongoDB
      const testResult = new TestResult({
        userId,
        testId,
        answers: userProgress.answeredQuestions.map((question) => ({
          questionId: question.questionId,
          answer: question.userAnswer,
        })),
        correctAnswers: correctAnswersCount,
        totalQuestions,
        score,
        passed,
      });
  
      // Save the test result
      await testResult.save();
  
      // Respond with the result
      return res.status(200).json({
        message: passed ? 'You passed the test!' : 'You failed the test.',
        score: `${score}%`,
        correctAnswers: correctAnswersCount,
        totalQuestions,
        passed,
        answeredQuestions: userProgress.answeredQuestions,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve the result and save the test result.' });
    }
  };

exports.submitAnswers = async (req, res) => {
    const { userId, testId, answer } = req.body; // Single question-answer pair
  
    // Validate input
    if (!answer || !answer.questionId || !answer.answer) {
      return res.status(400).json({ message: 'Answer and questionId are required.' });
    }
  
    try {
      const test = await Test.findById(testId).populate('questions');
      if (!test) {
        return res.status(404).json({ message: 'Test not found.' });
      }
  
      const totalQuestions = test.questions.length;
  
      // Find or create the user's progress record
      let userProgress = await UserTestProgress.findOne({ testId, userId });
  
      if (!userProgress) {
        userProgress = new UserTestProgress({
          userId,
          testId,
          answeredQuestions: [],
          totalNumberofQuestions: totalQuestions,
          progress: 0, // Start at the first question
        });
      }
  
      // Determine the current question index
      const currentQuestionIndex = userProgress.progress;
  
      // Ensure the answer corresponds to the current question
      const currentQuestion = test.questions[currentQuestionIndex];
      if (!currentQuestion || currentQuestion._id.toString() !== answer.questionId) {
        return res.status(400).json({
          message: `You must answer question ${currentQuestionIndex + 1} before proceeding.`,
        });
      }
  
      // Check if the question has already been answered
      const existingAnswer = userProgress.answeredQuestions.find(
        (q) => q.questionId.toString() === answer.questionId.toString()
      );
  
      if (existingAnswer) {
        return res.status(400).json({
          message: `You have already answered question ${currentQuestionIndex + 1}. You cannot change your answer.`,
        });
      }
  
      // Check if the submitted answer is correct
      const isCorrect = currentQuestion.correctAnswer === answer.answer;
  
      // Track the answer for the current question
      userProgress.answeredQuestions.push({
        questionId: currentQuestion._id,
        questionText: currentQuestion.questionText,
        userAnswer: answer.answer,
        isAnswered: true,
        isCorrect,
      });
  
      // Update progress to the next question
      userProgress.progress = userProgress.answeredQuestions.length;
  
      // Save the updated user progress
      await userProgress.save();
  
      // Check if the test is complete
      const isTestComplete = userProgress.progress >= totalQuestions;
  
      res.status(200).json({
        message: isTestComplete
          ? 'Test completed successfully.'
          : 'Answer submitted successfully.',
        progress: userProgress.progress,
        totalQuestions,
        isCorrect,
        isTestComplete,
        answeredQuestions: userProgress.answeredQuestions,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to submit the answer and update progress.' });
    }
  };
  