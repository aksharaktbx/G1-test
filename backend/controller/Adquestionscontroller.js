const Question = require('../modal/Createquestionmodal');
const Test = require('../modal/createtestmodal');  // Import Test model
const TestResult = require('../modal/testresultmodal');  // Import TestResult model
const UserTestProgress=require('../modal/usertestprogresstrackmodal')
// Add a new question to the database
const addQuestion = async (req, res) => {
  try {
    const { questionText, options, correctAnswer, category } = req.body;
    const newQuestion = new Question({ questionText, options, correctAnswer, category });
    await newQuestion.save();
    res.status(201).json({ message: 'Question added successfully!', question: newQuestion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add question' });
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
const submitAnswers = async (req, res) => {
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




const getResult = async (req, res) => {
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


module.exports = { addQuestion, getQuestions ,submitAnswers ,getResult};
