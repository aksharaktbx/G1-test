const mongoose = require('mongoose');

// Test Title Schema
const testTitleSchema = new mongoose.Schema({
  testTitleName: {
    type: String,
    required: true,
  },
  testTitleDescription: {
    type: String,
    required: false, // Optional description for the test title
  },
  testLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestLevel', // Reference to TestLevel
    required: true,
  },
});

// Test Level Schema
const testLevelSchema = new mongoose.Schema({
  testLevelName: {
    type: String,
    required: true,
    unique: true, // Ensure test levels are unique
  },
  testName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TestName', // Reference to TestName
    required: true,
  },
});

// Test Name Schema
const testNameSchema = new mongoose.Schema({
  testName: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: false // Optional description for the test name
  },
});

// Models
const TestName = mongoose.model('TestName', testNameSchema);
const TestLevel = mongoose.model('TestLevel', testLevelSchema);
const TestTitle = mongoose.model('TestTitle', testTitleSchema);

module.exports = { TestName, TestLevel, TestTitle };
