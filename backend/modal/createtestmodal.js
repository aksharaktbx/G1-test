const mongoose = require('mongoose');
const Question = require('../modal/Createquestionmodal'); // Assuming your Question model is defined in a separate file

// Test Schema
const testSchema = new mongoose.Schema({
  testName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestName', // Reference to the TestName model
    required: true,
  },
  testTitle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestTitle', // Reference to the TestTitle model
    required: true,
  },
  questionIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question', // Reference to the Question model
    },
  ],
  
  totalQuestions: {
    type: Number, // Stored in MongoDB, calculated on save
  },
  passingScore: {
    type: Number,
    default: 80, // Default passing rate in percentage
  },
  passingMarks: {
    type: Number, // Calculated field, not set manually
  },
  testLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestLevel', // Reference to the TestLevel model
    required: true,
  },
  testDescription: {
    type: String,
    required: true, // Required description for the test
  },
  mistakesAllowed: {
    type: Number, // Calculated field, not set manually
  },
});

// Method to create or update a test and calculate total questions
testSchema.statics.createOrUpdateTest = async function (testNameId, testLevelId, testTitleId, testDescription) {
  try {
    // Correct usage of ObjectId conversion using the 'new' keyword
    const testNameObjId = new mongoose.Types.ObjectId(testNameId); 
    const testLevelObjId = new mongoose.Types.ObjectId(testLevelId);
    const testTitleObjId = new mongoose.Types.ObjectId(testTitleId);

    // Check if the test already exists
    let test = await Test.findOne({
      testName: testNameObjId,
      testLevel: testLevelObjId,
      testTitle: testTitleObjId,
    });

    // Fetch all questions matching the provided test name, level, and title
    const questions = await Question.find({
      testName: testNameObjId,
      testLevel: testLevelObjId,
      testTitle: testTitleObjId,
    });

    const newQuestionIds = questions.map(question => question._id);

    // If the test exists, update it
    if (test) {
      // Only add new question IDs that are not already in the test
      const existingQuestionIds = new Set(test.questionIds.map(id => id.toString())); // Set for quick lookup
      const uniqueNewQuestionIds = newQuestionIds.filter(id => !existingQuestionIds.has(id.toString()));

      // If there are new questions, update the questionIds array
      if (uniqueNewQuestionIds.length > 0) {
        test.questionIds = [...test.questionIds, ...uniqueNewQuestionIds];
        test.totalQuestions = test.questionIds.length;  // Recalculate total questions
      }

      // Recalculate passing marks and mistakes allowed
      test.passingMarks = Math.ceil(test.totalQuestions * (test.passingScore / 100));
      test.mistakesAllowed = test.totalQuestions - test.passingMarks;

      // Save the updated test
      await test.save();

      return test;
    } else {
      // If the test doesn't exist, create a new test
      test = new Test({
        testName: testNameObjId,
        testLevel: testLevelObjId,
        testTitle: testTitleObjId,
        testDescription: testDescription,
        questionIds: newQuestionIds,
        totalQuestions: newQuestionIds.length,
      });

      // Calculate passing marks and mistakes allowed
      test.passingMarks = Math.ceil(test.totalQuestions * (test.passingScore / 100));
      test.mistakesAllowed = test.totalQuestions - test.passingMarks;

      // Save the test
      await test.save();

      return test;
    }
  } catch (error) {
    console.error('Error creating/updating test:', error);
    throw error;
  }
};

const Test = mongoose.model('Test', testSchema);

// Export Test model
module.exports = Test;
