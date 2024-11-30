const mongoose = require('mongoose');

// Define Question Schema
const questionSchema = new mongoose.Schema({
  questionText: { 
    type: String, 
    required: true 
  },
  options: [{ 
    type: String, 
    required: true 
  }], // Array of answer options
  correctAnswer: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: false 
  }, // Image URL (optional)

  // Reference to TestName schema
  testName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestName',
    required: true
  },

  // Reference to TestLevel schema
  testLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestLevel',
    required: true
  },

  // Reference to TestTitle schema
  testTitle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestTitle',
    required: true
  }
});

module.exports = mongoose.model('Question', questionSchema);
