const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }], // Array of answer options
  correctAnswer: { type: String, required: true }, // Correct answer
  category: { type: String, enum: ['diagnostic', 'car', 'motorcycle'], required: true }, // Category of the test
});

module.exports = mongoose.model('Question', questionSchema);
