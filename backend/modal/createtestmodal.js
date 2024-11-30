const mongoose = require('mongoose');
const Question = require('../modal/Createquestionmodal'); // Assuming your Question model is defined in a separate file

// Test Schema
const testSchema = new mongoose.Schema({
  testName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestName', // Reference to the TestName model
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

// Method to create a test and calculate total questions
testSchema.statics.createTest = async function (testNameId, testLevelId, testTitleId, testDescription) {
  try {
    // Correct usage of ObjectId conversion using the 'new' keyword
    const testNameObjId = new mongoose.Types.ObjectId(testNameId); 
    const testLevelObjId = new mongoose.Types.ObjectId(testLevelId);
    const testTitleObjId = new mongoose.Types.ObjectId(testTitleId);

    // Fetch all questions matching the provided test name, level, and title
    const questions = await Question.find({
      testName: testNameObjId,
      testLevel: testLevelObjId,
      testTitle: testTitleObjId,
    });

    // Extract question IDs
    const questionIds = questions.map(question => question._id);

    // Create a new test document with the question IDs and other details
    const test = new this({
      testName: testNameObjId,
      testLevel: testLevelObjId,
      testDescription: testDescription,
      questionIds: questionIds,
      totalQuestions: questions.length,
    });

    // Save the test document
    await test.save();

    // Calculate passing marks and mistakes allowed
    test.passingMarks = Math.ceil(test.totalQuestions * (test.passingScore / 100));
    test.mistakesAllowed = test.totalQuestions - test.passingMarks;

    // Save the test again after updating the passing marks and mistakes allowed
    await test.save();

    return test;
  } catch (error) {
    console.error('Error creating test:', error);
    throw error;
  }
};

// Middleware to calculate total questions, passing marks, and mistakes allowed
testSchema.pre('save', function (next) {
  // Calculate passing marks: 80% of total questions (round up to nearest integer)
  this.passingMarks = Math.ceil(this.totalQuestions * (this.passingScore / 100));

  // Calculate mistakes allowed: remaining questions after passing marks
  this.mistakesAllowed = this.totalQuestions - this.passingMarks;

  next();
});

const Test = mongoose.model('Test', testSchema);

// Export Test model
module.exports = Test;
