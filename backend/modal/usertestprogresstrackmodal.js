const mongoose = require('mongoose');

const UserTestProgressSchema = new mongoose.Schema({
  userId: { type:String, required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  answeredQuestions: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
      userAnswer: { type: String, required: true },
      isAnswered: { type: Boolean, default: false },
      isCorrect: { type: Boolean, default: false },
    },
  ],
  totalNumberofQuestions: { type: Number, required: true },
  progress: { type: Number, default: 0 },
});

const UserTestProgress = mongoose.model('UserTestProgress', UserTestProgressSchema);

module.exports = UserTestProgress;
