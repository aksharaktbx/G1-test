const UserTestProgress=require('../modal/usertestprogresstrackmodal')
const Test= require('../modal/createtestmodal');
const TestResult=require('../modal/testresultmodal')


// Controller method to create a test
exports.createTest = async (req, res) => {
  const { testNameId, testLevelId, testTitleId, testDescription } = req.body;

  try {
    const test = await Test.createOrUpdateTest(testNameId, testLevelId, testTitleId, testDescription);

    res.status(200).json({
      message: test ? 'Test updated successfully' : 'Test created successfully',
      test: test,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
exports.getTestById = async (req, res) => {
  const { id } = req.params; // Get testId from request params

  try {
    // Find the test by its ID and populate related fields (testName, testLevel, testTitle)
    const test = await Test.findById(id) // Directly passing the _id here
    .populate('testName')  // Populating the testNameId field
    .populate('testLevel') // Populating the testLevelId field
    .populate('testTitle') // Populating the testLevelId field
    .populate('questionIds') // Populating the testLevelId field

    if (!test) {
      return res.status(404).json({ message: 'Test not found for the given testId' });
    }

    // Return the test details
    res.status(200).json({
      message: 'Test fetched successfully',
      test: test,
    });
  } catch (error) {
    console.error('Error fetching test:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// Controller to fetch tests by testNameId
exports.getTestsByTestNameId = async (req, res) => {
  const { testNameId } = req.params; // Get testNameId from request params

  try {
    // Find all tests where the testName matches the provided testNameId
    const tests = await Test.find({ testName: testNameId }).populate('testName testLevel testTitle'); // Populating related fields if necessary
    
    if (tests.length === 0) {
      return res.status(404).json({ message: 'No tests found for the given testNameId' });
    }

    // Return the tests found
    res.status(200).json({
      message: 'Tests fetched successfully',
      testsName: tests,
    });
  } catch (error) {
    console.error('Error fetching tests:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getAllTests = async (req, res) => {
  try {
    // Call the method to get all tests from the database and populate the necessary fields
    const tests = await Test.find()
      .populate('testName')  // Populating the testNameId field
      .populate('testLevel') // Populating the testLevelId field
      .populate('testTitle') // Populating the testLevelId field
      .populate('questionIds')

    // Populating the testTitleId field

    // If no tests are found, return a 404 response
    if (!tests || tests.length === 0) {
      return res.status(404).json({ message: 'No tests found' });
    }

    // Send a successful response with the tests data, including populated fields
    res.status(200).json({
      message: 'Tests fetched successfully',
      tests: tests,
    });
  } catch (error) {
    console.error('Error fetching tests:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
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
    const { testId, userId } = req.body; // Get testId and userId from request
  

    try {
      // Find the test by its ID and populate the questions
      const test = await Test.findById(testId).populate('questionIds'); // Populate questionIds in Test
  
      if (!test) {
        return res.status(404).json({ message: 'Test not found' });
      }
  
      const totalQuestions = test.questionIds.length; // Get the total number of questions for this test
  
      // Find or create the user's progress record for this test
      let userProgress = await UserTestProgress.findOne({ testId, userId });
  
      if (!userProgress) {
        // If no progress record exists, create a new one
        userProgress = new UserTestProgress({
          userId,
          testId,
          answeredQuestions: [], // Initialize an empty list of answered questions
          totalNumberofQuestions: totalQuestions, // Store total number of questions
          progress: 0, // Start from the first question
        });
        await userProgress.save();
      }
  
      // If progress is equal to the total number of questions, the test is already complete
      if (userProgress.progress >= totalQuestions) {
        return res.status(200).json({
          message: 'Test already completed.',
          progress: userProgress.progress,
          totalQuestions: userProgress.totalNumberofQuestions,
        });
      }
  
      // Get the remaining questions (those not yet answered)
      const remainingQuestions = test.questionIds.slice(userProgress.progress);
  
      res.status(200).json({
        message: 'Test started successfully!',
        testName: test.testName,
        questions: remainingQuestions, // Return only unanswered questions
        progress: userProgress.progress, // Current progress
        totalQuestions: userProgress.totalNumberofQuestions, // Total number of questions
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to start the test' });
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
      let wrongAnswersCount = 0;
      
      userProgress.answeredQuestions.forEach((question) => {
        if (question.isCorrect) {
          correctAnswersCount++;
        } else {
          wrongAnswersCount++;
        }
      });
  
      const score = (correctAnswersCount / totalQuestions) * 100;
      const passingPercentage = 80; // Pass mark is 80%
      const passed = score >= passingPercentage;
  
      // Calculate the needed score to pass (i.e., the number of correct answers required to pass)
      const neededCorrectAnswers = Math.ceil((passingPercentage / 100) * totalQuestions) - correctAnswersCount;
  
      // Save the result to the TestResult collection in MongoDB
      const testResult = new TestResult({
        userId,
        testId,
        answers: userProgress.answeredQuestions.map((question) => ({
          questionId: question.questionId,
          answer: question.userAnswer,
        })),
        correctAnswers: correctAnswersCount,
        wrongAnswers: wrongAnswersCount,
        totalQuestions,
        score,
        passed,
      });
  
      // Save the test result
      await testResult.save();
  
      // Respond with the result, including the correct answers, wrong answers, and the needed score
      return res.status(200).json({
        message: passed ? 'You passed the test!' : 'You failed the test.',
        score: `${score}%`,
        correctAnswers: correctAnswersCount,
        wrongAnswers: wrongAnswersCount,
        totalQuestions,
        passed,
        neededCorrectAnswers, // How many more correct answers are needed to pass
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
      // Find the test by its ID and populate the questions
      const test = await Test.findById(testId).populate('questionIds'); // Corrected populate with questionIds
      if (!test) {
        return res.status(404).json({ message: 'Test not found.' });
      }
  
      const totalQuestions = test.questionIds.length; // Total questions in the test
  
      // Find or create the user's progress record
      let userProgress = await UserTestProgress.findOne({ testId, userId });
  
      if (!userProgress) {
        // If no progress exists, create a new record
        userProgress = new UserTestProgress({
          userId,
          testId,
          answeredQuestions: [],
          totalNumberofQuestions: totalQuestions,
          progress: 0, // Start at the first question
          status: 'Incomplete', // Initially incomplete
        });
        await userProgress.save(); // Save the new progress record
      }
  
      // Determine the current question index based on progress
      const currentQuestionIndex = userProgress.progress;
  
      // Ensure the answer corresponds to the current question
      const currentQuestion = test.questionIds[currentQuestionIndex];
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
        userAnswer: answer.answer,
        isAnswered: true,
        isCorrect,
      });
  
      // Update progress to the next question
      userProgress.progress = userProgress.answeredQuestions.length;
  
      // Update the status based on progress
      if (userProgress.progress >= totalQuestions) {
        userProgress.status = 'Complete'; // Set status to Complete when all questions are answered
      }
  
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
        status: userProgress.status, // Return the status of the test
        isTestComplete,
        answeredQuestions: userProgress.answeredQuestions, // List of all answered questions
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to submit the answer and update progress.' });
    }
  };
  

  // API to get all user progress data
exports.getAllUserProgress = async (req, res) => {
  try {
    // Fetch all user progress records from the collection
    const userProgressData = await UserTestProgress.find();

    // If no records are found
    if (!userProgressData || userProgressData.length === 0) {
      return res.status(404).json({ message: 'No user progress data found.' });
    }

    // Map through the data to add status (Complete / Incomplete)
    const result = userProgressData.map(progress => {
      const status = progress.progress === progress.totalNumberofQuestions ? 'Complete' : 'Incomplete';
      return {
        ...progress.toObject(),
        status: status, // Add status field to each progress record
      };
    });

    // Return the data along with the status
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch user progress data.' });
  }
};
  