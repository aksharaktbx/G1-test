const mongoose = require('mongoose');
const Question = require('../modal/Createquestionmodal'); // Assuming your Question model is defined

// Test Schema
const testSchema = new mongoose.Schema({
  testName: { type: mongoose.Schema.Types.ObjectId, ref: 'TestName', required: true },
  testTitle: { type: mongoose.Schema.Types.ObjectId, ref: 'TestTitle', required: true },
  questionIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  totalQuestions: { type: Number },
  passingScore: { type: Number, default: 80 },
  passingMarks: { type: Number },
  testLevel: { type: mongoose.Schema.Types.ObjectId, ref: 'TestLevel', required: true },
  testDescription: { type: String, required: true },
  mistakesAllowed: { type: Number },
});

testSchema.index({ testName: 1, testLevel: 1, testTitle: 1 }, { unique: true });

// Method to create or update a test and calculate total questions
testSchema.statics.createOrUpdateTest = async function (testNameId, testLevelId, testTitleId, testDescription) {
  try {
    const testNameObjId = new mongoose.Types.ObjectId(testNameId);
    const testLevelObjId = new mongoose.Types.ObjectId(testLevelId);
    const testTitleObjId = new mongoose.Types.ObjectId(testTitleId);

    // Check if the test already exists
    let test = await this.findOne({
      testName: testNameObjId,
      testLevel: testLevelObjId,
      testTitle: testTitleObjId,
    });

    // Fetch questions matching the provided IDs
    const questions = await Question.find({
      testName: testNameObjId,
      testLevel: testLevelObjId,
      testTitle: testTitleObjId,
    });

    const newQuestionIds = questions.map(question => question._id.toString());

    if (test) {
      // Update test with new questions
      const existingQuestionIds = new Set(test.questionIds.map(id => id.toString()));
      const uniqueNewQuestionIds = newQuestionIds.filter(id => !existingQuestionIds.has(id));

      if (uniqueNewQuestionIds.length > 0) {
        test.questionIds.push(...uniqueNewQuestionIds);
        test.totalQuestions = test.questionIds.length;
      }

      test.passingMarks = Math.ceil(test.totalQuestions * (test.passingScore / 100));
      test.mistakesAllowed = test.totalQuestions - test.passingMarks;

      await test.save();
      return test;
    } else {
      // Create a new test
      test = new this({
        testName: testNameObjId,
        testLevel: testLevelObjId,
        testTitle: testTitleObjId,
        testDescription,
        questionIds: newQuestionIds,
        totalQuestions: newQuestionIds.length,
      });

      test.passingMarks = Math.ceil(test.totalQuestions * (test.passingScore / 100));
      test.mistakesAllowed = test.totalQuestions - test.passingMarks;

      await test.save();
      return test;
    }
  } catch (error) {
    console.error('Error creating/updating test:', error);
    throw new Error('Unable to create or update test. Please try again.');
  }
};

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
