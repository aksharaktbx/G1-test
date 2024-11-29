const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  answers: [{ questionId: mongoose.Schema.Types.ObjectId, answer: String }],
  correctAnswers: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  score: { type: Number, required: true },
  passed: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('TestResult', testResultSchema);
