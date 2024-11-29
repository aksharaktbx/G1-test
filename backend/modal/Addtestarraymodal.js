const mongoose = require('mongoose');

const testTypeSchema = new mongoose.Schema({
  typeName: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: false // Optional description for the test type
  },
  testarray: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Test' // Reference to the Test model
  }]
});

module.exports = mongoose.model('TestType', testTypeSchema);
