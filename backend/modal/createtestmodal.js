const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testName: { 
    type: String, 
    required: true 
  },
  questions: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question' // Reference to the Question model
  }],
  totalQuestions: { 
    type: Number // Stored in MongoDB, calculated on save
  },
  passingScore: { 
    type: Number, 
    default: 80 // Default passing rate in percentage
  },
  passingMarks: { 
    type: Number // Calculated field, not set manually
  },
  testLevelName: { 
    type: String, 
    required: true
  },
  testLevelDescription: { 
    type: String, 
    required: false // Optional description for the test level
  },
  testDescription: { 
    type: String, 
    required: true // Required description for the test
  },
  mistakesAllowed: { 
    type: Number // Calculated field, not set manually
  }
});

// Middleware to calculate total questions, passing marks, and mistakes allowed
testSchema.pre('save', function(next) {
  // Count the total number of questions
  const totalQuestions = this.questions.length;
  this.totalQuestions = totalQuestions;

  // Calculate passing marks: 80% of total questions (round up to nearest integer)
  this.passingMarks = Math.ceil(totalQuestions * (this.passingScore / 100));

  // Calculate mistakes allowed: remaining questions after passing marks
  this.mistakesAllowed = totalQuestions - this.passingMarks;

  next();
});

// Export the model
module.exports = mongoose.model('Test', testSchema);
